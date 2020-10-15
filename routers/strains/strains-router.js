const axios = require('axios');
const router = require('express').Router();

//* GET ALL STRAINS
router.get('/all-strains', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/strains/search/all', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET INDICA STRAINS
router.get('/indica', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/strains/search/race/Indica', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET SATIVA STRAINS
router.get('/sativa', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/strains/search/race/Sativa', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET HYBRID STRAINS
router.get('/hybrid', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/strains/search/race/Hybrid', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET A LIST OF CANNABIS EFFECTS BY STRAIN ID
router.get('/:id/effects/', (req, res) => {
    const { id } = req.params;
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get(`http://strainapi.evanbusse.com/N9EiJCs/strains/data/effects/${id}`, requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET A LIST OF CANNABIS FLAVORS BY STRAIN ID
router.get('/:id/flavors', (req, res) => {
    const { id } = req.params;
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get(`http://strainapi.evanbusse.com/N9EiJCs/strains/data/flavors/${id}`, requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET STRAIN BY NAME
router.get('/strain/:name/', (req, res) => {
    const { name } = req.params;
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get(`http://strainapi.evanbusse.com/N9EiJCs/strains/search/name/${name}`, requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET A LIST OF CANNABIS EFFECTS
router.get('/effects', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/searchdata/effects/', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})

//* GET A LIST OF CANNABIS FLAVORS
router.get('/flavors', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get('http://strainapi.evanbusse.com/N9EiJCs/searchdata/flavors/', requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.json(err)
        })
})


module.exports = router;