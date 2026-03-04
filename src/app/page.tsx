export default function Page() {
    return (
        <main className="container mx-auto flex flex-col-reverse text-center pt-12.5 md:flex-row md:text-left md:pt-0 items-center px-[10%] md:px-0 gap-12.5 min-h-[70vh]">
            <div className="flex flex-1 flex-col max-w-150">
                <h1 className="text-[32px] md:text-5xl leading-[1.2] mb-5">
                    Dinheiro na conta sem burocracia. <br /><strong>É papo reto!</strong>
                </h1>

                <p className="text-[18px] text-argico-light mb-10">
                    O consignado da <strong>Argico</strong> é 100% via WhatsApp.
                    Nossa IA faz tudo por você, rápido e sem papelada.
                </p>

                <a
                    href="https://wa.me/5511919726743?text=Olá,%20Argico!%20Quero%20simular%20meu%20empréstimo."
                    className="inline-flex flex-col items-center bg-argico-whatsapp text-white px-5 py-5 rounded-[50px] text-xl font-bold transition-all duration-300 ease-in-out shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:scale-105 hover:shadow-[0_15px_35px_rgba(37,211,102,0.5)]"
                >
                    Quero falar com a Argico agora!
                    <span className="text-[12px] font-normal mt-1 opacity-90">(Clica e vem resolver sua vida)</span>
                </a>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <div className="flex w-25 h-25 md:w-37.5 md:h-37.5 bg-argico-whatsapp items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-[0_20px_40px_rgba(37,211,102,0.2)] animate-[float_4s_ease-in-out_infinite]">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.957-1.302C8.36 21.577 10.11 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.732 0-3.34-.45-4.735-1.24l-.34-.194-2.83.743.757-2.733-.213-.34A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                        <path
                            d="M15.5 11h-7a.5.5 0 000 1h7a.5.5 0 000-1zm0-3h-7a.5.5 0 000 1h7a.5.5 0 000-1zm-4 6h-3a.5.5 0 000 1h3a.5.5 0 000-1z" />
                    </svg>
                </div>
            </div>
        </main>
    )
}
