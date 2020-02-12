import React from 'react';

class LanguageSelector extends React.Component {

    state = {
        options: [
            { value: "Afrikanns", label: 'Afrikanns'},
            { value: "Albanian", label: 'Albanian'},
            { value: "Arabic", label: 'Arabic'},
            { value: "Armenian", label: 'Armenian'},
            { value: "Basque", label: 'Basque'},
            { value: "Bengali", label: 'Bengali'},
            { value: "Bulgarian", label: 'Bulgarian'},
            { value: "Catalan", label: 'Catalan'},
            { value: "Cambodian", label: 'Cambodian'},
            { value: "Chinese (Mandarin)", label: 'Chinese (Mandarin)'},
            { value: "Croation", label: 'Croation'},
            { value: "Czech", label: 'Czech'},
            { value: "Danish", label: 'Danish'},
            { value: "Dutch", label: 'Dutch'},
            { value: "English", label: 'English'},
            { value: "Estonian", label: 'Estonian'},
            { value: "Fiji", label: 'Fiji'},
            { value: "Finnish", label: 'Finnish'},
            { value: "French", label: 'French'},
            { value: "Georgian", label: 'Georgian'},
            { value: "German", label: 'German'},
            { value: "Greek", label: 'Greek'},
            { value: "Gujarati", label: 'Gujarati'},
            { value: "Hebrew", label: 'Hebrew'},
            { value: "Hindi", label: 'Hindi'},
            { value: "Hungarian", label: 'Hungarian'},
            { value: "Icelandic", label: 'Icelandic'},
            { value: "Indonesian", label: 'Indonesian'},
            { value: "Irish", label: 'Irish'},
            { value: "Italian", label: 'Italian'},
            { value: "Japanese", label: 'Japanese'},
            { value: "Javanese", label: 'Javanese'},
            { value: "Korean", label: 'Korean'},
            { value: "Latin", label: 'Latin'},
            { value: "Latvian", label: 'Latvian'},
            { value: "Lithuanian", label: 'Lithuanian'},
            { value: "Macedonian", label: 'Macedonian'},
            { value: "Malay", label: 'Malay'},
            { value: "Malayalam", label: 'Malayalam'},
            { value: "Maltese", label: 'Maltese'},
            { value: "Maori", label: 'Maori'},
            { value: "Marathi", label: 'Marathi'},
            { value: "Mongolian", label: 'Mongolian'},
            { value: "Nepali", label: 'Nepali'},
            { value: "Norwegian", label: 'Norwegian'},
            { value: "Persian", label: 'Persian'},
            { value: "Polish", label: 'Polish'},
            { value: "Portuguese", label: 'Portuguese'},
            { value: "Punjabi", label: 'Punjabi'},
            { value: "Quechua", label: 'Quechua'},
            { value: "Romanian", label: 'Romanian'},
            { value: "Russian", label: 'Russian'},
            { value: "Samoan", label: 'Samoan'},
            { value: "Serbian", label: 'Serbian'},
            { value: "Slovak", label: 'Slovak'},
            { value: "Slovenian", label: 'Slovenian'},
            { value: "Spanish", label: 'Spanish'},
            { value: "Swahili", label: 'Swahili'},
            { value: "Swedish ", label: 'Swedish' },
            { value: "Tamil", label: 'Tamil'},
            { value: "Tatar", label: 'Tatar'},
            { value: "Telugu", label: 'Telugu'},
            { value: "Thai", label: 'Thai'},
            { value: "Tibetan", label: 'Tibetan'},
            { value: "Tonga", label: 'Tonga'},
            { value: "Turkish", label: 'Turkish'},
            { value: "Ukranian", label: 'Ukranian'},
            { value: "Urdu", label: 'Urdu'},
            { value: "Uzbek", label: 'Uzbek'},
            { value: "Vietnamese", label: 'Vietnamese'},
            { value: "Welsh", label: 'Welsh'},
            { value: "Xhosa", label: 'Xhosa'}
        ]
    }

    handleChange = (e)=>{
        let selectedLanguage = e.target.value;
        this.props.setLanguage(selectedLanguage);
    }

    componentDidMount(){
    }

    render(){

        const langOpts = this.state.options.map(lang =>
            <option key={lang.value} value={lang.value}>
                {lang.label}
            </option>
        );

        return(
            <div>
                <p>LANGUAGE OF BOOK:</p>
                <select className="browser-default" name="langSelect" onChange={this.handleChange}>
                    <option value="">Select language</option>
                    {langOpts}
                </select>
            </div>
            
         ); 
    };
   
}

export default LanguageSelector;