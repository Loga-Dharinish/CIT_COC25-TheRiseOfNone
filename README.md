# AI Course Creator 🎓🤖  

AI Course Creator is an intelligent tool that generates **customized courses, lessons, and structured documents** using state-of-the-art AI models. It allows users to input topics or upload documents, and then automatically creates structured educational content, downloadable in **PDF** and **Word** formats.  

## ✨ Features  
- 🧠 **AI-Powered Content Generation** – Uses Hugging Face models like **DeepSeek-V3.1-Terminus:novita** and **Zephyr-7B** for generating course outlines, lessons, and descriptions.  
- 📄 **Multi-Format Export** – Supports exporting generated content into **PDF** (via FPDF) and **DOCX** (via python-docx).  
- 📚 **Document Understanding** – Extracts and processes text from uploaded PDFs using **PyPDF2**.  
- 🌐 **Interactive Interface** – Frontend built with **HTML/CSS/JavaScript** for easy user interaction.  
- ⚡ **Rapid Prototyping** – Developed and tested on **Google Colab** for fast experiments with free GPU support.  
- 🖥️ **Optional Web Hosting** – Can be deployed with **Flask** for API-based usage.  

## 🛠️ Tech Stack  
- **Programming Language**: Python  
- **AI Model Integration**: Hugging Face Inference Client (DeepSeek-V3.1, Zephyr-7B)  
- **Document Processing**: PyPDF2, python-docx, FPDF  
- **Frontend**: HTML, CSS, JavaScript  
- **Backend (Optional)**: Flask  
- **Development Environment**: Google Colab  

## 🚀 How It Works  
1. Enter a course topic or upload a PDF.  
2. AI generates structured course content.  
3. Export the generated course into **PDF/DOCX**.  
4. (Optional) Deploy the system on Flask for multi-user access.  



## 📌 Example  
**Input:** "Cybersecurity Fundamentals"  
**Output:** A structured course with modules on **phishing, malware, encryption, MFA, IoT security**, downloadable as PDF/DOCX.  

## 📜 License  
This project is licensed under the MIT License.  
