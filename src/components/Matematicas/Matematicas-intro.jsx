import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import './MatematicasCSS.css'

const MatematicasIntro = () => {
    return (
        <div className="app-container container-fluid row">
      <div className="app-sidebar col-lg-3 col-md-4 col-sm-5 col-12">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg-9 col-md-8 col-sm-7 col-12">
        <h1 className="text-center pt-3">Bienvenid@s a Matemáticas</h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 container-fluid mb-4 w-100">
            <div className="text-center border border-dark rounded p-3">
              <h3>Introducción a las Matemáticas</h3>
              <p>Matemáticas es la ciencia de los números y las formas. En las carreras STEM, las personas utilizan las matemáticas para resolver problemas, hacer predicciones y entender patrones en el mundo que nos rodea. Es como un lenguaje especial que nos ayuda a describir y comprender cómo funcionan las cosas, desde contar objetos hasta diseñar tecnologías avanzadas. Las matemáticas son herramientas poderosas que los científicos, ingenieros y muchos otros profesionales usan para explorar y entender nuestro universo.
</p>
<p>Te muestro algunas áreas de las matemáticas que demuestran cómo las matemáticas son herramientas versátiles que se aplican en diversos campos para resolver problemas y mejorar procesos.
</p>
<p>Matemáticas Aplicadas: Utiliza conceptos matemáticos para resolver problemas del mundo real, como predecir el clima, modelar el crecimiento de poblaciones o simular procesos industriales.
Estadística: Analiza datos para encontrar patrones y hacer predicciones. Ayuda a tomar decisiones informadas basadas en la información disponible.
Investigación Operativa: Aplica métodos matemáticos para optimizar procesos y tomar decisiones eficientes, como planificar rutas de entrega o gestionar inventarios.
Matemáticas Financieras: Se enfoca en aplicar conceptos matemáticos a situaciones financieras, como calcular inversiones, evaluar riesgos y entender el valor del dinero en el tiempo.
Criptografía: Utiliza las matemáticas para diseñar sistemas seguros de comunicación y proteger la información mediante la codificación y descodificación de mensajes.
Inteligencia Artificial basada en Matemáticas: Desarrolla algoritmos y modelos matemáticos para que las máquinas puedan aprender y tomar decisiones, como reconocer patrones en imágenes o traducir idiomas.
</p>
            </div>
          </div>
          
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 container-fluid mb-4">
            <div className="text-center rounded p-3 h-100">
            <Link to="" className='btn btn-intromath mx-2'>Volver a Capítulos</Link>
            <Link to="" className='btn btn-intromath mx-2'>Siguiente</Link>
            </div>
          </div>
      </div>
    </div>
    );
};

export default MatematicasIntro;