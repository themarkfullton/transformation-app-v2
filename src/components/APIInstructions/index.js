import React from 'react';
import { CopyBlock, solarizedDark } from "react-code-blocks";

class APIInstructions extends React.Component {
    render() {
        return (
            <>
            <h2>Get Trans-friendly Clinics</h2>
                <p>Send a get request to: </p>
                    <CopyBlock
                        text="/api/clinics"
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                    />
                <p>You'll receive something that looks like:</p>
                    <CopyBlock
                        text={clinicObject}
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                />
                
                <br />

                <h2>Get Fashion Resources</h2>
                <p>Send a get request to: </p>
                    <CopyBlock
                        text="/api/fashion"
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                    />
                <p>You'll receive something that looks like:</p>
                    <CopyBlock
                        text={fashionObject}
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                />

                <br />

                <h2>Get Fitness Resources</h2>
                <p>Send a get request to: </p>
                    <CopyBlock
                        text="/api/fitness"
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                    />
                <p>You'll receive something that looks like:</p>
                    <CopyBlock
                        text={fitnessObject}
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                />

                <br />

                <h2>Get Identity Resources</h2>
                <p>Send a get request to: </p>
                    <CopyBlock
                        text="/api/identity"
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                    />
                <p>You'll receive something that looks like:</p>
                    <CopyBlock
                        text={identityObject}
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                />
                
                <br />

                <h2>Get Travel Resources</h2>
                <p>Send a get request to: </p>
                    <CopyBlock
                        text="/api/travel"
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                    />
                <p>You'll receive something that looks like:</p>
                    <CopyBlock
                        text={travelObject}
                        language="json"
                        showLineNumbers={true}
                        theme={solarizedDark}
                        codeBlock
                />

                <br />
                </>
        );
    }

}

export default APIInstructions;

var clinicObject = `[
    {
        "id": "5efaacfa7bd467d6f91d7cf8",
        "name": "Thrive Alabama",
        "state": "AL",
        "street": "600 St Claire Ave SW Building 3",
        "city": "Huntsville",
        "zip": "35801",
        "phone": "(323) 993-7500",
        "website": "https://thrivealabama.org/care-and-services/medical/lgbtq-healthcare",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/1280px-Flag_of_Alabama.svg.png"
    }
]`;
        
var fashionObject = `[
    {
        "id": "5efb2cddc45c54854b12a916",
        "name": "How to Put Outfits Together – A 5-Step Formula for Crossdressers and Transgender Women",
        "source": "Feminization Secrets",
        "target": "mtf",
        "description": "'Do you sometimes feel like a participant on the TV show, What Not to Wear? ... Just follow this simple 5-step formula and I promise you’ll never look like a transgender fashion 'don’t' again!'",
        "link": "https://feminizationsecrets.com/crossdresser-transgender-outfit/"
        }
    ]`;
        
var fitnessObject = `[
    {
        "id": "5efb2cddc45c54854b12a916",
        "name": "How to Put Outfits Together – A 5-Step Formula for Crossdressers and Transgender Women",
        "source": "Feminization Secrets",
        "target": "mtf",
        "description": "'Do you sometimes feel like a participant on the TV show, What Not to Wear? ... Just follow this simple 5-step formula and I promise you’ll never look like a transgender fashion 'don’t' again!'",
        "link": "https://feminizationsecrets.com/crossdresser-transgender-outfit/"
        }
    ]`;

var identityObject = `[
    {
        "id": "5efb28c6c45c54854b12a909",
        "name": "ID Document Center: Learn How to do Name Changes and More",
        "source": "TransEquality",
        "target": "Identity",
        "description": "Learn about which documents you'll need to apply for identification changes",
        "link": "https://transequality.org/documents"
    }
    ]`;

    var travelObject = `[
    {
        "id": "5efb3100c45c54854b12a922",
        "name": "Worst (and Safest) Places to Travel for LGBTQ",
        "source": "Asher and Lyric",
        "target": "travel",
        "description": "Travel is dangerous for everyone, but us in particular. Research and stay safe!",
        "link": "https://www.asherfergusson.com/lgbtq-travel-safety/"
    }
    ]`;