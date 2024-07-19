let documentCount = 0;

function uploadFile() {
    alert("File uploaded! (This is a placeholder action.)");
}

function addDocumentField() {
    documentCount++;
    const additionalDocuments = document.getElementById("additional-documents");
    const newFormGroup = document.createElement("div");
    newFormGroup.className = "form-group";
    newFormGroup.innerHTML = `
        <select name="document-type-${documentCount}" id="document-type-${documentCount}">
            <option value="business-permit">Business Permit</option>
            <option value="tax-id">Tax Identification Number (TIN)</option>
            <option value="lease-agreement">Lease Agreement</option>
            <option value="business-license">Business License</option>
            <option value="barangay-clearance">Barangay Clearance</option>
        </select>
        <input type="file" name="document-file-${documentCount}" id="document-file-${documentCount}">
        <button type="button" onclick="uploadFile()">Upload File</button>
    `;
    additionalDocuments.appendChild(newFormGroup);
}

function previousStep() {
    alert("Going back to the previous step. (This is a placeholder action.)");
}

document.getElementById("document-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted! (This is a placeholder action.)");
});
