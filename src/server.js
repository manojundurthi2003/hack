const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000; // or any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/trust', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema and model for Innovation
const innovationSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  keywords: String,
  dateOfInnovation: Date,
  researchStage: String,
  image: String, // URL or file path
  documents: String, // URL or file path
  contactName: String,
  contactEmail: String,
  organization: String,
  collaborators: String,
  fundingSupport: String,
  impactBenefits: String,
  iprStatus: String,
  demoLink: String,
  approvalStatus: String,
  additionalNotes: String,
});

const Innovation = mongoose.model('Innovation', innovationSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// API route to handle innovation form submission
app.post('/submit-innovation', upload.fields([{ name: 'image' }, { name: 'documents' }]), async (req, res) => {
  try {
    const formData = req.body;
    if (req.files) {
      if (req.files['image']) {
        formData.image = req.files['image'][0].path; // Save file path
      }
      if (req.files['documents']) {
        formData.documents = req.files['documents'][0].path; // Save file path
      }
    }

    const innovation = new Innovation(formData);
    await innovation.save();
    res.status(201).json({ message: 'Innovation data saved successfully!' });
  } catch (error) {
    console.error('Error saving innovation data:', error);
    res.status(500).json({ error: 'Failed to save innovation data' });
  }
});

// Define schema and model for Fund
const fundSchema = new mongoose.Schema({
  profileName: String,
  email: String,
  category: String,
  projectTitle: String,
  projectDescription: String,
  fundingAmount: Number,
  additionalInfo: String
});

const Fund = mongoose.model('Fund', fundSchema);

// API route to handle fund form submission
app.post('/submit-fund', async (req, res) => {
  try {
    const fund = new Fund(req.body);
    await fund.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

// Define schema and model for Research
const researchSchema = new mongoose.Schema({
  title: String,
  category: String,
  abstract: String,
  keywords: String,
  researchers: String,
  institution: String,
  startDate: Date,
  endDate: Date,
  status: String,
  funding: String,
  researchUrl: String
});

const Research = mongoose.model('Research', researchSchema);

// API route to handle research form submission
app.post('/submit-research', async (req, res) => {
  try {
    const research = new Research(req.body);
    await research.save();
    res.status(201).json({ message: 'Research data saved successfully!' });
  } catch (error) {
    console.error('Error saving research data:', error);
    res.status(500).json({ error: 'Failed to save research data' });
  }
});

// Define schema and model for Startup
const startupSchema = new mongoose.Schema({
  startupName: String,
  tagline: String,
  logo: String, // Store the logo as a string (URL) or file path if you upload it to cloud storage
  founders: String,
  startupType: String,
  sector: String,
  email: String,
  phoneNumber: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  foundedDate: Date,
  employees: String,
  fundingStage: String,
  totalFunding: Number,
  revenueModel: String,
});

const Startup = mongoose.model('Startup', startupSchema);

// API route to handle startup form submission
app.post('/startup', async (req, res) => {
  try {
    const startup = new Startup(req.body);
    await startup.save();
    res.status(201).json({ message: 'Startup data saved successfully!' });
  } catch (error) {
    console.error('Error saving startup data:', error);
    res.status(500).json({ error: 'Failed to save startup data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
