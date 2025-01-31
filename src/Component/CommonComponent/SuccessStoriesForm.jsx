import React, { useState, useRef } from 'react';
import MessageIcon from '../../assets/images/other images/Message.svg'
import CallingIcon from '../../assets/images/other images/calling.svg'
import UserIcon from '../../assets/images/other images/user.svg'
// import RefreshIcon from '../../images/Success/Refresh.svg'
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Styles from './SuccessForm.css'
import Swal from 'sweetalert2'


function SuccessStoriesForm({ onVerify, isOpen, onClose, caseStudyId, type  }) {
    // console.log('id', caseStudyId, type)
    if (!isOpen) return null;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        recaptcha: false,
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef();

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        recaptcha: '',
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        recaptcha: false,
    });

    const handleCaptchaChange = (value) => {
        // console.log('val', value);
        setCaptchaValue(value);
        setFormData((prevData) => ({
            ...prevData,
            recaptcha: !!value,
        }));
    };


    const pdfFiles = {
        manageService: {
            1: "https://api-esds2024.esds.co.in/enquiry_api/files/MIDC_epass_portal_case_study.pdf",
            2: "https://api-esds2024.esds.co.in/enquiry_api/files/Maharashtra-State-Election-Commission-Case-Study.pdf",
            3: "https://api-esds2024.esds.co.in/enquiry_api/files/JanapriyaCaseStudy.pdf"
        },
        cloud: {
            1: "https://api-esds2024.esds.co.in/enquiry_api/files/MUDRA_Case_Study.pdf",
            2: "https://api-esds2024.esds.co.in/enquiry_api/files/LR-and-IGR-Case-Study.pdf",
            3: "https://api-esds2024.esds.co.in/enquiry_api/files/Vadilal_Case_Study.pdf"
        },
        whitepaper : {
            1: "https://api-esds2024.esds.co.in/enquiry_api/files/A-Fortress-to-Guarantee-Data-Security.pdf",
            2: "https://api-esds2024.esds.co.in/enquiry_api/files/Auto-Scalable-Cloud-Solutions.pdf",
            3: "https://api-esds2024.esds.co.in/enquiry_api/files/Automation_redefining.pdf",
            4: "https://api-esds2024.esds.co.in/enquiry_api/files/Suitability-Analysis-for-DR-Location.pdf",
            5: "https://api-esds2024.esds.co.in/enquiry_api/files/Colocation-Identifying-the-Right-Provider.pdf",
            6: "https://api-esds2024.esds.co.in/enquiry_api/files/CaaS.pdf"
        },
        private_cloud : {
            1 : 'https://api-esds2024.esds.co.in/enquiry_api/files/Private_Cloud/RatnagiriDistrictCentralCoopBankcasestudy.pdf',
            2: "https://api-esds2024.esds.co.in/enquiry_api/files/Private_Cloud/MCA-Casestudy.pdf",
            3 : "https://api-esds2024.esds.co.in/enquiry_api/files/Private_Cloud/Lauren-case-study.pdf"
        },
        bfsi_cloud : {
            1: "https://api-esds2024.esds.co.in/enquiry_api/files/BFSI-CC/RatnagiriDistrictCentralCoopBankcasestudy.pdf",
            2 : "https://api-esds2024.esds.co.in/enquiry_api/files/BFSI-CC/Sindhudurga-case-study.pdf",
            3: "https://api-esds2024.esds.co.in/enquiry_api/files/BFSI-CC/The_Kolhapur_District_Central_Co-op_Bank_Case_Study.pdf"
        },
        enterprise_cloud : {
            1 : "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Web-Page/MTR-Case-Study.pdf",
            2 : "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Web-Page/Vadilal-Case-Study.pdf",
            3 : "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-Web-Page/Alicon_Case_Study.pdf"
        },
        governemnt_cloud : {
            1 : "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-GCC/MUDRA_Case_Study.pdf",
            2 : "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-GCC/MIDC_epass_portal_case_study.pdf",
            3: "https://api-esds2024.esds.co.in/enquiry_api/files/ESDS-GCC/IBMCaseStudy_new.pdf"

        }
    };

    
    const validate = (name, value) => {
        const newErrors = { ...errors };

        if (name === 'name') {
            if (!value.trim()) {
                newErrors.name = 'Name is required';
                  const pdfName = pdfFiles[type][caseStudyId].split('/').pop().replace('.pdf', '');
            } else if (!/^[A-Za-z\s]{1,60}$/.test(value)) {
                newErrors.name = 'Allow entering alphabets only (max length 60 characters)';
            } else {
                newErrors.name = '';
            }
        }

        if (name === 'email') {
            if (!value.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[A-Za-z0-9@._%+-]{1,100}$/.test(value)) {
                newErrors.email = 'Allow entering alphabets, numbers and special characters only (max length 100 characters)';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                newErrors.email = 'Invalid email address';
            } else {
                newErrors.email = '';
            }
        }

        if (name === 'phone' || name === 'contact') {
            if (!value.trim()) {
                newErrors[name] = `${name === 'phone' ? 'Mobile' : 'Contact'} number is required`;
            } else if (!/^\d{10,13}$/.test(value)) {
                newErrors[name] = 'Please enter a valid Contact Number (10 to 13 digits)';
            } else {
                newErrors[name] = '';
            }
        }


        // if (name === 'recaptcha') {
        //     if (!value) {
        //         newErrors.recaptcha = 'Please confirm you are not a robot';
        //     } else {
        //         newErrors.recaptcha = '';
        //     }
        // }
        if (name === 'recaptcha' && !value) {
            newErrors.recaptcha = 'Please confirm you are not a robot';
        }
        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
        validate(name, newValue);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });

        validate(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTouched = {
            name: true,
            email: true,
            phone: true,
            recaptcha: true,
        };
    
        setTouched(newTouched);
    
        const newErrors = {};
        const keyMap = {
            name: 'full_name',
            email: 'business_email',
            phone: 'contact',
            recaptcha: 'recaptcha'
        };
    
        const transformedValues = {};
        Object.keys(formData).forEach((fieldName) => {
            let value = formData[fieldName];
            if (fieldName === 'recaptcha') {
                value = !!captchaValue;
            } else {
                value = value && typeof value === 'string' ? value.trim() : '';
            }
            const transformedKeyName = keyMap[fieldName];
            transformedValues[transformedKeyName] = value;
        });
    
        Object.keys(formData).forEach((fieldName) => {
            if (!transformedValues[keyMap[fieldName]]) {
                newErrors[fieldName] = 'This field is required';
            }
        });
    
        if (!captchaValue) {
            newErrors.recaptcha = 'Please complete the reCAPTCHA';
        }
    
        setErrors(newErrors);
        const hasError = Object.values(newErrors).some((error) => error);
        if (hasError) {
            return;
        }
    
    
        // reCAPTCHA validation
        if (!captchaValue) {
            return; 
        }
    
   
      axios.post(
                'https://api-esds2024.esds.co.in:8000/api/casestudy/',
                transformedValues,
                {
                    headers: {
                        'Authorization': `Token 9e7ccadba501b39c7f69e2e2b7efc01f5b54b16811a`,
                        'Content-Type': 'application/json'
                    }
                }
            )      
        .then(response => {
            if (response.data.status === 'success') {
                Swal.fire('Form submitted successfully')    
        
            const downloadPDF = () => {
                  const pdfName = pdfFiles[type][caseStudyId].split('/').pop().replace('.pdf', '');
                const link = document.createElement('a');
                link.href = pdfFiles[type][caseStudyId]; 
                link.download = `${pdfName}`; 
                link.target = "_blank"
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            downloadPDF();
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    recaptcha: false,
                });
    
                setTouched({});
                setErrors({});
                setCaptchaValue(null);

            }
            recaptchaRef.current.reset();
            
            onClose();
        })
        .catch(error => {
            // console.error('Error:', error);
         
        });
    };
    

    return (
        <div id='modal-overlay' className="modal_overlay" onClick={onClose}>
        {/* <div className="modal-overlay"> */}

            <form className="card" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} >
                <div className="headerText">
                <h2>Explore Success Stories of Our Customers</h2>
               
                </div>
                <div className="input_group">
                    {/* <i className="icon user-icon"></i> */}
                    <img src={UserIcon} alt="User Icon" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* {touched.name && errors.name && <span className="error">{errors.name}</span>} */}
                </div>
                <div style={{ width: '100%' }}>
                    {touched.name && errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className={Styles.input_group}>
                    {/* <i className="icon email-icon"></i> */}
                    <img src={MessageIcon} alt="Email Icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {/* {touched.email && errors.email && <span className="error">{errors.email}</span>} */}
                </div>
                <div style={{ width: '100%' }}>
                    {touched.email && errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input_group">
                    {/* <i className="icon phone-icon"></i> */}
                    <img src={CallingIcon} alt="Phone Icon" />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div style={{ width: '100%' }}>
                    {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="recaptcha" style={{margin:0}}>
                    <div className="recaptcha_container">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                            sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
                            onChange={handleCaptchaChange}
                            theme="dark" 
                            size="normal"
                        />
                    </div>

                    {/* <div>
                        <img src={RefreshIcon} alt="Refresh Icon" />
                    </div> */}
                </div>
                <div style={{ width: '100%' }}>
                    {touched.recaptcha && errors.recaptcha && <span className="error">{errors.recaptcha}</span>}

                </div>
                <div className="last_btn">
                <div className="close_btn" onClick={onClose}>Cancel</div>
                <button type="submit" className="submit_btn">Download Now</button>
                </div>
               
                

            </form>
        </div>
    );
}

export default SuccessStoriesForm;