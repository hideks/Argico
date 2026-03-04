"use client"

import { useState } from "react"
import GenericModal from "./generic-modal"

export default function Footer() {
    const [modalConfig, setModalConfig] = useState({ open: false, title: '', url: '' });

    const openModal = (title: string, url: string) => setModalConfig({ open: true, title, url });

    return (
        <footer className="container mx-auto mt-10 md:mt-0 border-t border-[#eee] text-argico-light text-center text-xs py-10 px-[10%] md:px-0">
            <p className="mb-2.5">Argico &copy; 2026. Todos os direitos reservados. Uma empresa com alma de família. (Arthur, Giovana e Enrico agradecem)</p>
            <div>
                <button
                    className="mx-2.5"
                    onClick={() => openModal(
                        'Política de Privacidade',
                        'https://docs.google.com/document/d/1L4u-Eo97DMAYWHYDVPRTsWUg2ivKKTMPI62bBfL1BeI/edit?tab=t.0'
                    )}
                >
                    Política de Privacidade
                </button>

                <span>|</span>

                <button
                    className="mx-2.5"
                    onClick={() => openModal(
                        'Termos de Uso',
                        'https://docs.google.com/document/d/11oXJ7eolA1kcyF2L_rvRU9k9p619O5ZeLphIhqkCeuw/edit?tab=t.0'
                    )}
                >
                    Termos de Uso
                </button>

                <GenericModal
                    isOpen={modalConfig.open}
                    title={modalConfig.title}
                    docUrl={modalConfig.url}
                    onClose={() => setModalConfig({ ...modalConfig, open: false })}
                />
            </div>
        </footer>
    )
}
