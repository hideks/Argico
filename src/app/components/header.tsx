export default function Header() {
    return (
        <header className='container mx-auto flex flex-col items-center md:items-start py-10 px-[10%] md:px-0'>
            <div className="flex items-center gap-2 text-[32px] font-bold text-argico-primary">
                Argico<span className="text-argico-whatsapp">.</span>
            </div>
            <div className="text-[14px] text-argico-light -mt-1.25">Empréstimo Consignado no Zap</div>
        </header>
    )
} 
