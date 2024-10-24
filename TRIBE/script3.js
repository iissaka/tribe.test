// Pour la capture de la photo
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const photo = document.getElementById('photo');
const validationSection = document.getElementById('validation-section');

// Accéder à la caméra
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Erreur avec l'accès à la caméra: ", err);
  });

// Fonction pour capturer la photo
captureButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convertir l'image en base64
  const dataUrl = canvas.toDataURL('image/png');
  photo.src = dataUrl;

  // Simuler l'extraction des données (normalement fait via OCR)
  const extractedData = {
    nom: "Jaloud Sani",
    numeroCarte: "123456789",
    dateNaissance: "01/01/1985",
    adresse: "Rue de Plateau, Niamey",
    dateExpiration: "01/01/2030"
  };

  // Remplir les champs avec les données extraites
  document.getElementById('nom').value = extractedData.nom;
  document.getElementById('numero-carte').value = extractedData.numeroCarte;
  document.getElementById('date-naissance').value = extractedData.dateNaissance;
  document.getElementById('adresse').value = extractedData.adresse;
  document.getElementById('date-expiration').value = extractedData.dateExpiration;

  // Afficher la section de validation
  validationSection.style.display = 'block';

  // Cocher automatiquement les cases "Correct"
  document.getElementById('nom-correct').checked = true;
  document.getElementById('numero-carte-correct').checked = true;
  document.getElementById('date-naissance-correct').checked = true;
  document.getElementById('adresse-correct').checked = true;
  document.getElementById('date-expiration-correct').checked = true;
});
