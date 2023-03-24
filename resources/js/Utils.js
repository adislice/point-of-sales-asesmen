
export function formatCurrency(nilai) {
    let formatted = new Intl.NumberFormat('id-ID', { 
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0, 
    }).format(nilai)
    return `Rp. ${formatted}`
}