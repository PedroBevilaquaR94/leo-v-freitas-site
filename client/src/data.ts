export type GalleryItem = {
  id: number;
  title: string;
  label: string;
  image: string;
  description?: string;
};

const asset = (fileName: string): string => `https://leotattoo-ad7j4zjd.manus.space/manus-storage/${fileName}`;

export const tattooPortfolio: GalleryItem[] = [
  { id: 1, title: "Retrato Realista com Cruz", label: "Realismo", image: asset("Screenshot2026-05-12at16.31.48_65465ba8.png") },
  { id: 2, title: "Portrait em Cores", label: "Portrait", image: asset("Screenshot2026-05-12at16.32.31_503dc6a8.png") },
  { id: 3, title: "Galáxia Colorida", label: "Realismo", image: asset("Screenshot2026-05-12at16.32.47_ff57ab6e.png") },
  { id: 4, title: "Retrato Animal Preto e Cinza", label: "Realismo", image: asset("Screenshot2026-05-12at16.33.06_21d72cd2.png") },
  { id: 5, title: "Composição Blackwork", label: "Blackwork", image: asset("Screenshot2026-05-12at16.33.26_776733ef.png") },
  { id: 6, title: "Retrato Expressivo", label: "Portrait", image: asset("Screenshot2026-05-12at16.34.15_f20cb0bb.png") },
];

export const coverUpPortfolio: GalleryItem[] = [
  { id: 1, title: "Cobertura Leão", label: "Cobertura", image: asset("pasted_file_DvQ6eq_image_33b4206b.png") },
  { id: 2, title: "Cobertura Cavalo", label: "Cobertura", image: asset("pasted_file_wxN8Yh_image_25e02ef8.png") },
  { id: 3, title: "Cobertura Caveira", label: "Cobertura", image: asset("pasted_file_J1Mw78_image_d7c88bec.png") },
  { id: 4, title: "Cobertura Retrato", label: "Cobertura", image: asset("pasted_file_RVh7sN_image_4d695bbc.png") },
  { id: 5, title: "Cobertura Abstrata", label: "Cobertura", image: asset("pasted_file_RDLyHe_image_6d6924e9.png") },
  { id: 6, title: "Cobertura Geométrica", label: "Cobertura", image: asset("pasted_file_02LVDT_image_8cdc75d4.png") },
  { id: 7, title: "Cobertura Tribal", label: "Cobertura", image: asset("pasted_file_66olnI_image_59973cfa.png") },
  { id: 8, title: "Cobertura Floral", label: "Cobertura", image: asset("pasted_file_UVguXP_image_4d0925da.png") },
];

export const paintingsPortfolio: GalleryItem[] = [
  { id: 1, title: "Leoa Majestosa", label: "Óleo sobre tela • 80 x 60 cm • 2024", description: "Retrato expressivo de uma leoa com olhar penetrante, explorando a força e beleza da natureza selvagem.", image: asset("pasted_file_zKaKQu_image_43f5289b.png") },
  { id: 2, title: "Retrato Canino", label: "Óleo sobre tela • 70 x 50 cm • 2024", description: "Composição que captura a lealdade e doçura de um companheiro canino com técnica realista.", image: asset("pasted_file_OdzX6p_image_a93c33be.png") },
  { id: 3, title: "Cavalo na Água", label: "Óleo sobre tela • 100 x 70 cm • 2024", description: "Paisagem dinâmica com cavalo em movimento, explorando a interação entre animal e natureza.", image: asset("pasted_file_HGL7Di_image_87fdc35a.png") },
  { id: 4, title: "Caveira em Chamas", label: "Óleo sobre tela • 90 x 90 cm • 2024", description: "Composição simbólica com elementos de fogo e morte, criando atmosfera dramática e intensa.", image: asset("pasted_file_TlFzaa_image_b1190dda.png") },
  { id: 5, title: "Retrato Ancestral", label: "Carvão sobre papel • 85 x 65 cm • 2024", description: "Desenho expressivo que explora a sabedoria e profundidade através de técnica de carvão.", image: asset("pasted_file_OpS2JV_image_95d25e0a.png") },
  { id: 6, title: "Retrato Feminino", label: "Carvão sobre papel • 75 x 55 cm • 2024", description: "Composição delicada que captura a elegância e serenidade através de técnica de carvão fino.", image: asset("pasted_file_ZNtwqQ_image_9c95c34e.png") },
];
