export const getCroppedImg = async (
  imageSrc: string,
  crop: { x: number; y: number; width: number; height: number }
) => {
  const image = new Image();
  image.src = imageSrc;

  await new Promise((resolve) => {
    image.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx?.drawImage(
    image,
    crop.x,          // COMEÇA AQUI: X correto
    crop.y,          // Y correto
    crop.width,      
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise<File>((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      resolve(new File([blob], "cropped.jpeg", { type: "image/jpeg" }));
    }, "image/jpeg");
  });
};
