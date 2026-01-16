
import React, { useState, useRef } from 'react';
import {
  Briefcase,
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronRight,
  Camera,
  Wand2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { INITIAL_CV_DATA } from './constants';
import { CVData } from './types';

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-2">
    <span className="text-[#001f3f]">{icon}</span>
    <h2 className="text-xl font-bold text-[#001f3f] uppercase tracking-wider">{title}</h2>
  </div>
);

export default function App() {
  const [cvData, setCvData] = useState<CVData>(INITIAL_CV_DATA);
  const [isFormalizing, setIsFormalizing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCvData({ ...cvData, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const formalizePhoto = async () => {
    if (!cvData.photo) return;
    setIsFormalizing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = cvData.photo.split(',')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: 'image/png'
              }
            },
            {
              text: "CRITICAL TASK: Upscale and enhance this image to 4K Ultra-HD professional studio quality. Remove all pixelation, blur, and digital noise. Sharpen facial features, eyes, and skin texture to be crystal clear. Transform the person into a top-tier executive headshot. Add a perfectly tailored premium navy blue business suit, a crisp white formal shirt, and a professional silk tie. Ensure the lighting is soft, balanced, and high-end studio style. The background should be a professional, slightly blurred office interior. The final result must look like a high-resolution professional photograph, completely sharp and free of artifacts."
            }
          ]
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setCvData({ ...cvData, photo: `data:image/png;base64,${part.inlineData.data}` });
          break;
        }
      }
    } catch (error) {
      console.error("Error formalizando la foto:", error);
    } finally {
      setIsFormalizing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-0 md:py-8 px-0 md:px-4">

      <div className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row cv-container border-0 md:border md:border-slate-200 min-h-screen md:min-h-0">

        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-[#001f3f] text-white p-8 lg:p-10">
          <div className="mb-10 text-center md:text-left">
            <div className="relative group w-40 h-40 mx-auto md:mx-0 mb-8">
              <div
                className="w-full h-full bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 overflow-hidden cursor-pointer relative"
                onClick={() => fileInputRef.current?.click()}
              >
                {cvData.photo ? (
                  <img src={cvData.photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-20 h-20 text-white/40" />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity no-print">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              {cvData.photo && (
                <button
                  onClick={(e) => { e.stopPropagation(); formalizePhoto(); }}
                  disabled={isFormalizing}
                  className="absolute bottom-1 right-1 bg-blue-500 p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform no-print disabled:opacity-50"
                  title="Mejorar Calidad IA"
                >
                  {isFormalizing ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Wand2 className="w-5 h-5 text-white" />
                  )}
                </button>
              )}
            </div>
            <h1 className="text-3xl font-bold leading-tight mb-2 tracking-tight">{cvData.name}</h1>
            <p className="text-blue-300 font-medium text-lg leading-snug">{cvData.title}</p>
          </div>

          <div className="space-y-10">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-5 border-b border-white/10 pb-1">Contacto</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href={`mailto:${cvData.email}`} className="break-all hover:underline text-white">{cvData.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href={`tel:${cvData.phone.replace(/\s/g, '')}`} className="hover:underline text-white">{cvData.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <span>{cvData.location}</span>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-5 border-b border-white/10 pb-1">Digital</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-300 flex-shrink-0" />
                  <a href={`https://${cvData.linkedin}`} target="_blank" rel="noopener noreferrer" className="break-all hover:underline text-white">{cvData.linkedin}</a>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-5 border-b border-white/10 pb-1">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.technicalSkills.map((skill, idx) => (
                  <span key={idx} className="bg-white/10 text-slate-100 px-3 py-1 rounded text-[10px] border border-white/5 uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-5 border-b border-white/10 pb-1">Socio-Conductuales</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.softSkills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-400/20 text-blue-100 px-3 py-1 rounded text-[10px] border border-blue-400/10 uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 bg-white">
          <div className="space-y-14">
            <section>
              <SectionTitle icon={<User className="w-5 h-5" />} title="Perfil Profesional" />
              <p className="text-[#333333] leading-relaxed text-lg">
                {cvData.profile}
              </p>
            </section>

            <section>
              <SectionTitle icon={<Briefcase className="w-5 h-5" />} title="Experiencia Profesional" />
              <div className="space-y-12">
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-100 last:border-0 pb-2">
                    <div className="absolute -left-[6.5px] top-1.5 w-[11px] h-[11px] bg-[#001f3f] rounded-full" />
                    <div className="flex flex-wrap justify-between items-center mb-1">
                      <h4 className="text-xl font-bold text-[#333333]">{exp.role}</h4>
                      <span className="text-sm font-semibold text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-[#001f3f] font-bold mb-4 italic text-sm">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-[#333333] leading-snug text-[0.95rem]">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle icon={<GraduationCap className="w-5 h-5" />} title="Formación Académica" />
              <div className="space-y-6">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded border border-slate-100 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-[#333333]">{edu.degree}</h4>
                      <p className="text-[#001f3f] font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-slate-500 font-medium">{edu.period}</p>
                      <span className="inline-block mt-1 px-3 py-0.5 bg-blue-50 text-[#001f3f] rounded text-[10px] font-bold uppercase border border-blue-100">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
}
