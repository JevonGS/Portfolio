const Project = () =>{

    return(
        <div className="mt-30 py-10" data-aos="fade-up" id='Project'>
            <h1 className="text-center text-5xl font-bold">Project</h1>
            <p className="text-xl/loose text-center mt-7">some projects I have created.</p>
            <div className="project grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/deepfake.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>Deepfake Detector</h3>
                        <p className='mt-5 text-base opacity-80'>AI model to perform Deepfake Detector, which aims to detect whether an image is artificially generated or not.</p>
                        <div className="category mt-8 grid grid-cols-4 gap-5 text-center">
                            <p className='bg-gray-700 rounded-xl border p-2'>Python</p>
                            <p className='bg-gray-700 rounded-xl border p-2'>Kotlin</p>
                        </div>
                    </div>
                    <a href="https://github.com/Mis-291205/AoL-AI_VGG16"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/Dash.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>DashMarket Website</h3>
                        <p className='mt-5 text-base opacity-80'>E-commerce website that uniquely sells both old and fresh products, with an engaging UI/UX, diverse and interactive features.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>HTML</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>CSS</p>     
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5 '>Javascript</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5 '>PHP</p>
                        </div>
                    </div>
                    <a href="https://github.com/Dard1ka/DashMarket-Website-SE_Binus"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/Sign.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>Sign Language</h3>
                        <p className='mt-5 text-base opacity-80'>Sign Language model to detect various hand movements, enabling it to detect hand movements, which are useful for helping deaf and mute people communicate with others.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Python</p>
                        </div>
                    </div>
                    <a href="https://github.com/Dard1ka/Sign-Languange-Using-Resnet-50-and-MobileNetV1"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/speech.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>Speech To Text</h3>
                        <p className='mt-5 text-base opacity-80'>The main focus in this project is to do Speech to Text where we use an Indonesian voice dataset and then train the model so that it can detect sounds in Indonesian and then translate them using the deep-translator extension to convert Indonesian text into English text.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Python</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Streamlit</p>
                        </div>
                    </div>
                    <a href="https://github.com/Dard1ka/STT-Indo_to_English-Using-Wav2Vec2-and-Whisper-Model"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/abst.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>Abstractive Summarization</h3>
                        <p className='mt-5 text-base opacity-80'>Abstract Summarization model using three models: BART, T5, and FlanT5. Long text input, which can be an article or news item, and abstractive summarization will be performed to produce an output summary using artificial words.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Python</p>
                        </div>
                    </div>
                    <a href="https://github.com/JevonGS/Abstractive-Summarization"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/waste.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>Waste Classification</h3>
                        <p className='mt-5 text-base opacity-80'>Waste Classification website application to detect waste based on organic or inorganic categories. The model was trained using manual extraction and a combination of ensemble learning techniques, including Random Forest and K-Nearest Neighbor.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Python</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Gradio</p>
                        </div>
                    </div>
                    <a href="https://github.com/JevonGS/Waste-Classification-with-Manual-Feature-Extraction-and-Ensemble-Learning-Techniques"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/crud.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>CRUD</h3>
                        <p className='mt-5 text-base opacity-80'>A simple CRUD full-stack project, not yet accessible to the public but already functioning well in terms of frontend, backend, and database for entering and deleting user profile data.</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>React JS</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Express JS</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>MySQL</p>
                        </div>
                    </div>
                    <a href="https://github.com/JevonGS/CRUD"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
                <div className="group transform transition-transform duration-300 w-full h-full bg-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-b-2 hover:scale-105">
                    <div>
                        <img src="/Assets/str.png" alt="" className='h-[200px] w-full object-fill'/>
                        <h3 className='mt-5 text-2xl font-bold'>StRdict - Android</h3>
                        <p className='mt-5 text-base opacity-80'>StRdict is my application that aims to predict whether a person will experience a positive or negative stroke by entering some daily data. Using Kotlin as main language for making the Apps and Random Forest Classifier for the AI</p>
                        <div className="category mt-8 flex flex-wrap gap-4 text-center w-full">
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Kotlin</p>
                            <p className='bg-gray-700 rounded-xl border p-2 pl-5 pr-5'>Python</p>
                        </div>
                    </div>
                    <a href="https://github.com/JevonGS/StRdict-Android"><button className='mt-10 text-black bg-white w-full font-medium p-3 rounded-xl text-base hover:bg-gray-500'>See Project</button></a>
                </div>
            </div>
        </div>
    );

}

export default Project