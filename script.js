function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Vladimir Jimenez Puerta
TEL: +57 3153155112
NOTE: Socio Fundador
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function descargarContacto1() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Jimenez Puerta Abogados
TEL: +57 3187324455
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

