"use client";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    docUrl: string;
}

export default function GenericModal({ isOpen, onClose, title, docUrl }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-4xl rounded-xl h-[95vh] md:h-[85vh] flex flex-col overflow-hidden shadow-2xl">
                <div className="p-4 border-b flex justify-between items-center bg-neutral-50">
                    <h2 className="text-lg font-bold text-argico-dark">{title}</h2>
                    <button onClick={onClose} className="text-2xl hover:text-red-500 transition">&times;</button>
                </div>

                <div className="flex-1">
                    <iframe src={docUrl} className="w-full h-full border-none" />
                </div>
            </div>
        </div>
    );
}
