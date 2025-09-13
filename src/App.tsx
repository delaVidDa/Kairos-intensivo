import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Home, Volume2, Move, Heart, Phone, Calendar, Star, Zap, Brain, Target, Anchor, Wifi, WifiOff } from 'lucide-react';

const KairosIntensivoApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentFrequency, setCurrentFrequency] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMovement, setShowMovement] = useState(false);
  const [colorPhase, setColorPhase] = useState(0);
  const [breathPhase, setBreathePhase] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase(prev => (prev + 1) % 360);
      setBreathePhase(prev => prev + 0.015);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Solo las 3 frecuencias del programa intensivo
  const frequencies = [
    {
      hz: '396',
      title: 'TOMA TIERRA',
      subtitle: 'Enraízate en el Presente',
      day: 1,
      dayTitle: 'RESET DE BASE — Presente Estable',
      chakraColor: '#7F1D1D',
      baseColors: ['#7F1D1D', '#991B1B', '#B91C1C'],
      deepColors: ['#450A0A', '#7F1D1D', '#991B1B'],
      vocalSound: 'U',
      element: 'Tierra',
      context: 'Despertar consciente',
      contextRecommendation: 'DÍA 1: Perfecto para el inicio del día. Úsalo en casa al despertar, conecta con auriculares para loops infinitos mientras eliminas patrones de supervivencia digital y anclas tu energía en el momento presente.',
      transformacion: 'Elimina patrones de supervivencia digital y ancla tu energía en el momento presente',
      movements: [
        {
          name: 'Raíces Profundas de Reset',
          description: 'Pies firmemente plantados, flexiona rodillas muy lentamente sintiendo como las raíces penetran profundamente en la tierra. Brazos como raíces que abrazan y absorben la estabilidad del suelo. Siente como cada célula se resetea.',
          duration: '90 segundos',
          voice: 'Vocal "U" profunda, prolongada y resonante desde las raíces',
          intensity: 'Reset Profundo'
        },
        {
          name: 'Ondas de Anclaje Temporal',
          description: 'Movimientos muy suaves de cadera en forma de ocho infinito, liberando toda tensión acumulada desde la base. Permite que el cuerpo se deshaga de patrones digitales obsoletos. El tiempo se ralentiza.',
          duration: '2 minutos',
          voice: 'Repetir "U" con respiración consciente y pausas regenerativas',
          intensity: 'Liberación Celular'
        },
        {
          name: 'Abrazo Terrestre Completo',
          description: 'Posición fetal de pie, abrazándote completamente mientras te balanceas suavemente. Reconexión total con tu esencia más primitiva y pura. Reset completo del sistema nervioso.',
          duration: '3 minutos',
          voice: 'Vocal "U" como un mantra de regreso a casa',
          intensity: 'Reset Total'
        }
      ]
    },
    {
      hz: '639',
      title: 'DESDE LA ARMONÍA',
      subtitle: 'Conexión y Compasión',
      day: 2,
      dayTitle: 'RESET EMOCIONAL — Corazón Presente',
      chakraColor: '#14532D',
      baseColors: ['#14532D', '#166534', '#16A34A'],
      deepColors: ['#052E16', '#14532D', '#166534'],
      vocalSound: 'A',
      element: 'Corazón',
      context: 'Conexión emocional',
      contextRecommendation: 'DÍA 2: Ideal para momentos de reconexión emocional profunda. Úsalo en espacios íntimos para sanar la desconexión emocional y restaurar vínculos auténticos contigo mismo y otros en el aquí y ahora.',
      transformacion: 'Sana la desconexión emocional y restaura vínculos auténticos en el aquí y ahora',
      movements: [
        {
          name: 'Abrazo Cósmico Regenerativo',
          description: 'Brazos que se abren completamente hacia el universo y luego se cierran en un abrazo total hacia el corazón. Como si abrazaras toda tu historia emocional con compasión infinita. Reset emocional profundo.',
          duration: '2 minutos',
          voice: 'Vocal "A" amorosa y sanadora, desde el corazón expandido',
          intensity: 'Sanación Emocional'
        },
        {
          name: 'Círculos de Compasión Infinita',
          description: 'Movimientos circulares amplios del pecho y brazos, irradiando ondas de amor incondicional hacia todas las direcciones. Cada círculo disuelve una capa de desconexión emocional.',
          duration: '90 segundos',
          voice: '"A" que abraza, conecta y sana cada herida emocional',
          intensity: 'Restauración del Vínculo'
        },
        {
          name: 'Ondas de Armonía Temporal',
          description: 'Movimiento ondulante de todo el cuerpo como una ola de amor que viaja desde el corazón hacia cada extremidad. Reconecta con la capacidad natural de amar sin condiciones.',
          duration: '3 minutos',
          voice: 'Vocal "A" en diferentes tonos, como un coro interno de amor',
          intensity: 'Reset Relacional Completo'
        }
      ]
    },
    {
      hz: '963',
      title: 'ON MODO AVIÓN',
      subtitle: 'Desconectar para Conectar',
      day: 3,
      dayTitle: 'RESET MENTAL — Claridad Temporal',
      chakraColor: '#581C87',
      baseColors: ['#581C87', '#7C2D12', '#A855F7'],
      deepColors: ['#2E1065', '#581C87', '#6B21A8'],
      vocalSound: 'I/AEOU',
      element: 'Consciencia',
      context: 'Desconexión total',
      contextRecommendation: 'DÍA 3: Para la desconexión total y reconexión espiritual. Úsalo completamente desconectado de dispositivos para alcanzar estados de claridad mental perfecta y conexión con tu sabiduría interior presente.',
      transformacion: 'Alcanza estados de claridad mental perfecta y conexión con tu sabiduría interior presente',
      movements: [
        {
          name: 'Antenas Cósmicas de Claridad',
          description: 'Brazos elevados hacia el cielo como antenas receptoras de sabiduría universal. Movimientos muy lentos y conscientes, captando frecuencias sutiles más allá de lo digital. Reset mental profundo.',
          duration: '3 minutos',
          voice: 'Comenzar con "I" crystal clear y permitir que fluyan todas las vocales naturalmente',
          intensity: 'Reset Mental Completo'
        },
        {
          name: 'Danza de Desconexión Consciente',
          description: 'Movimiento completamente libre e intuitivo de todo el cuerpo, sin patrones preestablecidos. Como si fueras un ser completamente desconectado de la matriz digital, danzando tu verdad más pura.',
          duration: '5 minutos',
          voice: 'Secuencia completa "I-A-E-O-U" cíclica y orgánica',
          intensity: 'Liberación Mental Total'
        },
        {
          name: 'Espiral de Consciencia Infinita',
          description: 'Movimiento en espiral ascendente y descendente, integrando cielo y tierra, digital y analógico, mente y corazón en una sola experiencia de claridad absoluta.',
          duration: '4 minutos',
          voice: 'Improvisación vocal total con todas las vocales en libertad completa',
          intensity: 'Reset Espiritual Completo'
        }
      ]
    }
  ];

  const programaCompleto = {
    title: 'KAIRÓS INTENSIVO',
    subtitle: 'La Regeneración Energética Completa',
    description: 'El momento de tu transformación integral en 3 días',
    duracion: '3 DÍAS INTENSIVOS',
    objetivo: 'Reset completo de tu sistema energético en tiempo real',
    beneficios: [
      'Reseteo energético completo en tiempo real',
      'Liberación de patrones limitantes del presente', 
      'Desintoxicación digital del momento presente',
      'Activación secuencial de las 3 frecuencias clave',
      'Técnicas de vocalización terapéutica intensivas',
      'Reconexión con tu sabiduría interior presente'
    ],
    metodologia: [
      {
        icon: <Anchor className="w-8 h-8" />,
        title: 'Anclaje Temporal',
        description: 'Cada día te ancla más profundamente en el momento presente, liberando capas de desconexión.',
        color: '#7F1D1D'
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: 'Reset Progresivo',
        description: 'Transformación secuencial: Base → Emocional → Mental para una regeneración integral.',
        color: '#14532D'
      },
      {
        icon: <WifiOff className="w-8 h-8" />,
        title: 'Desconexión Consciente',
        description: 'Proceso gradual de desintoxicación digital hacia la reconexión con tu esencia.',
        color: '#581C87'
      }
    ]
  };

  const nextFrequency = () => {
    setIsAnimating(true);
    setShowMovement(false);
    setTimeout(() => {
      setCurrentFrequency((prev) => (prev + 1) % frequencies.length);
      setCurrentDay(frequencies[(currentFrequency + 1) % frequencies.length].day);
      setIsAnimating(false);
    }, 400);
  };

  const prevFrequency = () => {
    setIsAnimating(true);
    setShowMovement(false);
    setTimeout(() => {
      const newIndex = (currentFrequency - 1 + frequencies.length) % frequencies.length;
      setCurrentFrequency(newIndex);
      setCurrentDay(frequencies[newIndex].day);
      setIsAnimating(false);
    }, 400);
  };

  const toggleMovement = () => {
    setShowMovement(!showMovement);
  };

  const goToHome = () => {
    setCurrentPage('home');
    setShowMovement(false);
  };

  const current = frequencies[currentFrequency];

  const getDynamicBackground = (colors, deepColors) => {
    const phase1 = Math.sin(colorPhase * 0.008) * 0.5 + 0.5;
    const phase2 = Math.sin(colorPhase * 0.012 + Math.PI/3) * 0.5 + 0.5;
    const phase3 = Math.sin(colorPhase * 0.006 + Math.PI*2/3) * 0.5 + 0.5;
    
    return {
      background: `
        radial-gradient(circle at 15% 15%, ${deepColors[0]}${Math.floor(25 + phase1 * 35).toString(16)} 0%, transparent 45%),
        radial-gradient(circle at 85% 35%, ${colors[1]}${Math.floor(20 + phase2 * 30).toString(16)} 0%, transparent 55%),
        radial-gradient(circle at 45% 85%, ${deepColors[2]}${Math.floor(15 + phase3 * 25).toString(16)} 0%, transparent 50%),
        linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #0D1117 100%)
      `
    };
  };

  const breathingScale = 1 + Math.sin(breathPhase) * 0.08;

  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-purple-950 relative overflow-hidden">
        {/* Fondo animado más intenso */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-red-600 to-purple-700 -top-48 -left-48"
            style={{ 
              transform: `rotate(${colorPhase}deg) scale(${breathingScale})`,
              filter: 'blur(1px)',
              boxShadow: `0 0 100px ${programaCompleto.metodologia[0].color}50`
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 top-1/4 -right-40"
            style={{ 
              transform: `rotate(${-colorPhase * 0.8}deg) scale(${1.3 - breathingScale + 1})`,
              filter: 'blur(1px)',
              boxShadow: `0 0 80px ${programaCompleto.metodologia[1].color}50`
            }}
          ></div>
          <div 
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 -bottom-36 left-1/3"
            style={{ 
              transform: `rotate(${colorPhase * 1.2}deg) scale(${breathingScale})`,
              filter: 'blur(1px)',
              boxShadow: `0 0 90px ${programaCompleto.metodologia[2].color}50`
            }}
          ></div>
        </div>

        <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto">
          {/* Header Principal */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 rounded-full border-gradient-to-r from-red-500 to-purple-500"></div>
                <div 
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-red-400 to-purple-600 opacity-30"
                  style={{ transform: `rotate(${colorPhase}deg) scale(${breathingScale})` }}
                ></div>
                <div 
                  className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-40"
                  style={{ transform: `rotate(${-colorPhase * 0.8}deg) scale(${1.1 - breathingScale + 1})` }}
                ></div>
                <div 
                  className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 opacity-50"
                  style={{ transform: `rotate(${colorPhase * 1.2}deg) scale(${breathingScale})` }}
                ></div>
              </div>
            </div>

            <h1 className="text-8xl font-bold text-white mb-6"
                style={{
                  fontFamily: 'helvetica, sans-serif',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.5), 6px 6px 0px rgba(127,29,29,0.3)',
                  letterSpacing: '6px',
                  transform: 'perspective(600px) rotateX(15deg)',
                  background: 'linear-gradient(45deg, #d4af37, #ffd700, #d4af37)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
              KAIRÓS
            </h1>
            
            <div className="bg-gradient-to-r from-red-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 mb-6">
              <h2 className="text-4xl text-white font-bold mb-2"
                  style={{ letterSpacing: '3px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                INTENSIVO
              </h2>
              <p className="text-2xl text-red-200 font-light mb-2">
                {programaCompleto.subtitle}
              </p>
              <p className="text-lg text-gray-300 italic">
                {programaCompleto.description}
              </p>
            </div>

            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 mb-6">
              <div className="text-2xl font-bold text-white" style={{ letterSpacing: '2px' }}>
                {programaCompleto.duracion}
              </div>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Programa Detallado */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              El Proceso de Reset Completo
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {frequencies.map((freq, index) => (
                <div key={index} className="relative">
                  <div 
                    className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
                    style={{ 
                      borderColor: freq.chakraColor,
                      boxShadow: `0 10px 30px ${freq.chakraColor}40, inset 0 1px 0 rgba(255,255,255,0.1)`
                    }}
                  >
                    <div 
                      className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
                      style={{ backgroundColor: freq.chakraColor }}
                    >
                      DÍA {freq.day}
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2">{freq.hz}Hz</div>
                    <h4 className="text-xl font-bold text-white mb-2">{freq.title}</h4>
                    <h5 className="text-lg font-bold mb-4" style={{ color: freq.chakraColor }}>
                      {freq.dayTitle}
                    </h5>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {freq.transformacion}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-400">
                        <Volume2 className="w-4 h-4 mr-2" style={{ color: freq.chakraColor }} />
                        <span>Vocal: <strong className="text-white">{freq.vocalSound}</strong></span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Target className="w-4 h-4 mr-2" style={{ color: freq.chakraColor }} />
                        <span>Elemento: <strong className="text-white">{freq.element}</strong></span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Brain className="w-4 h-4 mr-2" style={{ color: freq.chakraColor }} />
                        <span>Contexto: <strong className="text-white">{freq.context}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Beneficios del Programa */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Beneficios del Reset Intensivo</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {programaCompleto.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gradient-to-r from-red-500 to-purple-500"></div>
                    {beneficio}
                  </div>
                ))}
              </div>
            </div>

            {/* Metodología */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programaCompleto.metodologia.map((metodo, index) => (
                <div key={index} className="text-center p-6 bg-black/30 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-center mb-4" style={{ color: metodo.color }}>
                    {metodo.icon}
                  </div>
                  <h5 className="font-semibold text-white mb-3 text-lg">{metodo.title}</h5>
                  <p className="text-gray-400 leading-relaxed text-sm">{metodo.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Llamada a la Acción */}
          <div className="bg-gradient-to-br from-red-950/80 to-purple-950/80 backdrop-blur-lg rounded-3xl p-8 border border-red-500/30 shadow-2xl text-center">
            <h3 className="text-4xl font-bold text-white mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Inicia tu Reset Completo
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              3 días para una regeneración energética total. El momento perfecto es ahora.
            </p>
            <p className="text-3xl font-bold text-yellow-400 mb-6"
               style={{
                 textShadow: '0 2px 8px rgba(212, 175, 55, 0.5)',
                 filter: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.2))'
               }}>
              Tu transformación integral te espera
            </p>
            <p className="text-2xl text-white font-semibold mb-8">David de la VidDa</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setCurrentPage('frequencies')}
                className="px-12 py-6 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(45deg, #7F1D1D, #581C87)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '1px',
                  boxShadow: '0 10px 30px rgba(127,29,29,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                Movimientos / Frecuencias
              </button>
              
              <a
                href="https://wa.me/34676437076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp - 676 43 70 76
              </a>
            </div>
            
            <p className="text-gray-400 text-sm mt-8">
              3 frecuencias intensivas • Reset progresivo • Transformación completa
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Página de Frecuencias Intensivas
  return (
    <div 
      className="min-h-screen relative overflow-hidden transition-all duration-1000"
      style={getDynamicBackground(current.baseColors, current.deepColors)}
    >
      <div className="text-center pt-6 pb-4 px-4 relative z-10">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={goToHome}
            className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-200"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <Home className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white"
                style={{
                  fontFamily: 'helvetica, sans-serif',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                  letterSpacing: '2px'
                }}>
              KAIRÓS INTENSIVO
            </h1>
            <p className="text-gray-200 text-xs tracking-wide">
              Reset Energético • DÍA {currentDay}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 mb-6 relative z-10">
        <button
          onClick={prevFrequency}
          className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-200 shadow-lg"
          style={{ boxShadow: '0 6px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex space-x-3">
          {frequencies.map((freq, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 border-2 ${
                index === currentFrequency 
                  ? 'w-12 h-12 shadow-lg border-white' 
                  : 'w-8 h-8 bg-black/30 border-white/30'
              }`}
              style={{
                backgroundColor: index === currentFrequency ? freq.chakraColor : undefined,
                boxShadow: index === currentFrequency ? `0 0 15px ${freq.chakraColor}70` : undefined
              }}
            >
              {index === currentFrequency && (
                <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold">
                  {freq.day}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={nextFrequency}
          className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-200 shadow-lg"
          style={{ boxShadow: '0 6px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className={`px-6 transform transition-all duration-700 relative z-10 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-4"
                 style={{ boxShadow: `0 10px 25px ${current.chakraColor}50` }}>
              <h2 className="text-6xl font-bold text-white mb-3"
                  style={{
                    fontFamily: 'helvetica, sans-serif',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.5), 6px 6px 0px rgba(0,0,0,0.2)',
                    letterSpacing: '4px',
                    transform: 'perspective(500px) rotateX(15deg) scale(1.1)',
                    background: `linear-gradient(45deg, ${current.chakraColor}, #ffffff)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                DÍA {current.day} • {current.hz}<span className="text-3xl">Hz</span>
              </h2>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-2"
              style={{
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                letterSpacing: '2px',
                transform: 'perspective(300px) rotateX(10deg)'
              }}>
            {current.title}
          </h3>
          
          <p className="text-gray-200 text-xl font-light mb-2">
            {current.subtitle}
          </p>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 mb-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold mb-2" style={{ color: current.chakraColor }}>
              {current.dayTitle}
            </h4>
            <p className="text-gray-300 text-sm">
              {current.transformacion}
            </p>
          </div>

          <div className="inline-block bg-black/40 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center justify-center space-x-4">
              <Volume2 className="w-6 h-6 text-white" />
              <span className="text-2xl font-bold text-white" style={{ letterSpacing: '2px' }}>
                Vocal: {current.vocalSound}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={toggleMovement}
            className="flex items-center justify-center mx-auto px-10 py-5 backdrop-blur-sm rounded-full border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: `${current.chakraColor}60`,
              borderColor: `${current.chakraColor}80`,
              boxShadow: `0 12px 30px ${current.chakraColor}40, inset 0 1px 0 rgba(255,255,255,0.2)`
            }}
          >
            {showMovement ? <Pause className="w-6 h-6 mr-3 text-white" /> : <Play className="w-6 h-6 mr-3 text-white" />}
            <span className="text-white font-bold tracking-wide text-lg">
              {showMovement ? 'Ocultar Movimientos Reset' : 'Activar Movimientos Reset'}
            </span>
          </button>
        </div>

        <div className={`transform transition-all duration-700 overflow-hidden ${
          showMovement ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-5'
        }`}>
          <div className="space-y-8 mb-8">
            {current.movements.map((movement, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-102"
                style={{
                  borderLeftColor: current.chakraColor,
                  borderLeftWidth: '6px',
                  boxShadow: `0 12px 25px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white"
                      style={{
                        textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                        transform: 'perspective(200px) rotateX(5deg)'
                      }}>
                    {movement.name}
                  </h4>
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: current.chakraColor }}
                  >
                    {movement.intensity}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                  {movement.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: current.chakraColor }}></div>
                    <span><strong className="text-white">Duración:</strong> {movement.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Volume2 className="w-4 h-4 mr-2" style={{ color: current.chakraColor }} />
                    <span className="italic font-semibold text-white">{movement.voice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contexto de Uso Intensivo */}
          <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8"
               style={{ 
                 borderTopColor: current.chakraColor, 
                 borderTopWidth: '4px',
                 boxShadow: `0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
               }}>
            <h5 className="text-2xl font-semibold text-white mb-6"
                style={{ 
                  textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                  transform: 'perspective(200px) rotateX(5deg)'
                }}>
              🎵 Contexto de Reset - DÍA {current.day}
            </h5>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              <strong className="text-white">Escucha la frecuencia {current.hz}Hz</strong> mientras realizas estos movimientos de reset profundo y permites que 
              la vocal <strong className="text-white">"{current.vocalSound}"</strong> emerja desde tu centro más profundo. Esta combinación intensiva de sonido, 
              movimiento y expresión vocal pura está diseñada para una transformación completa del día {current.day}.
            </p>
            
            <div className="bg-black/50 rounded-2xl p-6 border-l-6" style={{ borderColor: current.chakraColor }}>
              <p className="text-white leading-relaxed font-medium text-lg">
                💡 <strong>Proceso Intensivo:</strong> {current.contextRecommendation}
              </p>
            </div>
          </div>

          {/* Contacto específico para Reset */}
          <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center"
               style={{ 
                 borderTopColor: current.chakraColor, 
                 borderTopWidth: '4px',
                 boxShadow: `0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
               }}>
            <h5 className="text-2xl font-semibold text-white mb-4">
              ¿Listo para tu Reset Completo?
            </h5>
            <p className="text-gray-300 mb-6 text-lg">
              Completa los 3 días del programa intensivo y experimenta la transformación total
            </p>
            <a
              href="https://wa.me/34676437076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactar - David de la VidDa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KairosIntensivoApp;
