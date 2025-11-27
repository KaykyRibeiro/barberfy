import { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../utils/getCroppedImg";

interface CropModalProps {
  image: string; // URL da imagem selecionada
  onClose: () => void;
  onCropComplete: (file: File) => void; // devolve o arquivo cortado
}

export default function CropModal({ image, onClose, onCropComplete }: CropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

  async function handleFinish() {
    if (!croppedAreaPixels) return;
    const blob = await getCroppedImg(image, croppedAreaPixels); // croppedAreaPixels has x,y,width,height
    const file = new File([blob], "cropped-logo.jpg", { type: "image/jpeg" });
    onCropComplete(file);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-999">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Ajustar corte</h2>

        <div className="relative w-full h-64 bg-black/20">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={16 / 9} 
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
          />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />

          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancelar
            </button>

            <button onClick={handleFinish} className="px-4 py-2 bg-green-600 text-white rounded">
              Concluir corte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
