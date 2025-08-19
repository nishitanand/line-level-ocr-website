// Website Configuration
// Update these values to customize your research paper website

const siteConfig = {
    // Paper Information
    paper: {
        title: "Why Stop at Words? Unveiling the Bigger Picture through Line-Level OCR",
        shortTitle: "Line-Level OCR",
        
        // Authors
        authors: [
            {
                name: "Shashank Vempati",
                isEqual: true,
                url: "#", // Update with actual profile URL
                email: "aiy227509@iitd.ac.in",
                isCorresponding: true
            },
            {
                name: "Nishit Anand", 
                isEqual: true,
                url: "#", // Update with actual profile URL
                email: "nishit.cstaff@iitd.ac.in",
                isCorresponding: true
            },
            {
                name: "Gaurav Talebailkar",
                isEqual: false,
                url: "#",
                email: "gauravgtalebailkar@gmail.com"
            },
            {
                name: "Arpan Garai",
                isEqual: false,
                url: "#",
                email: "arpangarai@gmail.com"
            },
            {
                name: "Chetan Arora",
                isEqual: false,
                url: "#",
                email: "chetan@cse.iitd.ac.in"
            }
        ],

        // Institution
        institution: "Indian Institute of Technology Delhi",
        country: "India",

        // Links
        links: {
            paper: "#", // Update with actual paper URL (arXiv, etc.)
            code: "#", // Update with GitHub repository URL
            dataset: "#", // Update with dataset download URL
            projectPage: "https://your-project-page.github.io" // Update with actual project page
        },

        // Key Statistics
        stats: {
            accuracyImprovement: "5.4%",
            efficiencyImprovement: "4×",
            datasetSize: "251"
        },

        // Abstract
        abstract: `Conventional optical character recognition (OCR) techniques segmented each character and then recognized. This made them prone to error in character segmentation, and devoid of context to exploit language models. Advances in sequence to sequence translation in last decade led to modern techniques first detecting words and then inputting one word at a time to a model to directly output full words as sequence of characters. This allowed better utilization of language models and bypass error-prone character segmentation step.

We observe that the above transition in style has moved the bottleneck in accuracy to word segmentation. Hence, in this paper, we propose a natural and logical progression from word level OCR to line-level OCR. The proposal allows to bypass errors in word detection, and provides larger sentence context for better utilization of language models. We show that the proposed technique not only improves the accuracy but also efficiency of OCR.

Despite our thorough literature survey, we did not find any public dataset to train and benchmark such shift from word to line-level OCR. Hence, we also contribute a meticulously curated dataset of 251 English page images with line-level annotations. Our experimentation revealed a notable end-to-end accuracy improvement of 5.4%, underscoring the potential benefits of transitioning towards line-level OCR, especially for document images. We also report a 4× improvement in efficiency compared to word-based pipelines.`,

        // Citation
        bibtex: `@article{vempati2024lineocr,
  title={Why Stop at Words? Unveiling the Bigger Picture through Line-Level OCR},
  author={Vempati, Shashank and Anand, Nishit and Talebailkar, Gaurav and Garai, Arpan and Arora, Chetan},
  journal={arXiv preprint},
  year={2024},
  institution={Indian Institute of Technology Delhi}
}`,

        // Publication Info
        venue: "arXiv preprint", // Update when published
        year: "2024",
        status: "preprint" // "published", "accepted", "submitted", "preprint"
    },

    // Website Settings
    website: {
        title: "Line-Level OCR - Research Paper",
        description: "A paradigm shift from word-level to line-level OCR achieving significant improvements in accuracy and efficiency.",
        keywords: "OCR, Line-level OCR, Computer Vision, Document Analysis, Text Recognition",
        author: "Vempati and Anand",
        
        // Social Media / SEO
        ogImage: "images/og-image.jpg", // Create this image for social sharing
        twitterCard: "summary_large_image",
        
        // Analytics
        googleAnalytics: "", // Add your GA tracking ID if needed
        
        // Contact
        contactEmail: "chetan@cse.iitd.ac.in",
        
        // Repository
        githubRepo: "https://github.com/username/line-level-ocr", // Update with actual repo
    },

    // Visual Settings
    theme: {
        primaryColor: "#2563eb",
        accentColor: "#06b6d4", 
        successColor: "#10b981",
        errorColor: "#ef4444",
        
        // Fonts
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        
        // Logo/Branding
        showInstitutionLogo: false,
        institutionLogoUrl: "", // Add if you want to show institution logo
    },

    // Content Sections
    sections: {
        showAbstract: true,
        showPipelineComparison: true,
        showContributions: true,
        showResults: true,
        showDataset: true,
        showCitation: true,
        
        // Additional sections (set to true to enable)
        showRelatedWork: false,
        showImplementation: false,
        showDemonstration: false,
        showAcknowledgments: false
    },

    // Results Data
    results: {
        // Main comparison table
        accuracyComparison: [
            { method: "CRAFT + ABINet", crr: "85.32", flexAcc: "92.15" },
            { method: "DBNet + PARSeq", crr: "89.74", flexAcc: "96.27" },
            { method: "Ours (Line-Level)", crr: "97.62", flexAcc: "97.62", highlight: true }
        ],
        
        // System comparison
        systemComparison: [
            { system: "PP-OCR", crr: "78.96", flexAcc: "87.72" },
            { system: "Tesseract", crr: "88.16", flexAcc: "88.41" },
            { system: "DocTR", crr: "83.52", flexAcc: "97.14" },
            { system: "Ours", crr: "85.76", flexAcc: "97.62", highlight: true }
        ]
    },

    // Dataset Information
    dataset: {
        name: "Line-Level OCR Dataset",
        description: "A meticulously curated dataset of 251 English page images with line-level annotations.",
        size: "251 images",
        format: "JPG/PNG images with text annotations",
        language: "English",
        annotationType: "Line-level",
        license: "Academic use", // Update with actual license
        downloadUrl: "#", // Update with actual download URL
        
        features: [
            "251 English document pages",
            "Line-level annotations", 
            "Diverse document types",
            "Publicly available"
        ]
    }
};

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}

// Make available globally
window.siteConfig = siteConfig; 