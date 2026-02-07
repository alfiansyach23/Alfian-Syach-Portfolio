export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-end mt-16'>
      {/* Gambar dihapus, tinggal tambahkan justify-end jika ingin teks tetap di kanan */}
      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2025 Personal Portfolio</p>
        <p>Made by -ALFIN</p>
      </div>
    </div>
  )
}
