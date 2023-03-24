<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = Menu::latest()->get();
        return Inertia::render('Menus/Index', [
            'menus' => $menus
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Menus/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validation = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required',
            'image' => 'mimes:jpg,jpeg,png,gif'
        ]);
        $image = $request->file('image');
        $ext = '.' . $request->image->getClientOriginalExtension();
        $fileName = str_replace($ext, "-" . date('d-m-Y-H-i') . $ext, $request->image->getClientOriginalName());

        $fileImage = $request->file('image')->storeAs('public', $fileName);
        $filePath = "/storage/" . $fileName;
        $validation['image'] = $filePath;
        Menu::create($validation);
        return redirect('/menus')->with('success', 'Data berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $menu = Menu::find($id);
        return Inertia::render('Menus/Edit', [
            'menu' => $menu
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $validation = $request->validate([
            'name' => 'required|max:255',
            'price' => 'required',
            'image' => 'nullable|mimes:jpg,jpeg,png,gif'
        ]);

        $menu = Menu::find($id);
        $menu->name = $validation['name'];
        $menu->price = $validation['price'];
        
        if ($request->image) {
            $image = $request->file('image');
            $ext = '.' . $request->image->getClientOriginalExtension();
            $fileName = str_replace($ext, "-" . date('d-m-Y-H-i') . $ext, $request->image->getClientOriginalName());

            $fileImage = $request->file('image')->storeAs('public', $fileName);
            $filePath = "/storage/" . $fileName;
            $validation['image'] = $filePath;
            $menu->image = $filePath;
        }
        $menu->save();

        return  redirect('/menus')->with('success', 'Data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleted = Menu::find($id)->delete();
        if ($deleted) {
            return redirect('/menus')->with('success', "Data berhasil dihapus!");
        }
    }
}
