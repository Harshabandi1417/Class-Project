/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Car Rentals - Find the best way',
    pageHeader: {
    title: 'Car Rentals',
    strapline: 'Find the best way'
    },
    locations: [{
    name: 'KINNU RENTALS',
    address: 'OPP-Anurag University,Street-1,Jodimetla ,Hyderabad,50007',
    rating: 3,
    facilities: ['Car washing', 'Available 24/7', 'unlimited KM'],
    distance: '100m'
    },{
    name: 'Cafe Hero',
    address: 'OPP-Anurag University,Street-1,Jodimetla ,Hyderabad,50007',
    rating: 4,
    facilities: ['Car washing', 'Available 24/7', 'unlimited KM'],
    distance: '200m'
    },{
    name: 'Burger Queen',
    address: 'Anurag pakka galli',
    rating: 2,
    facilities: ['Available 24/7', 'unlimited KM'],
    distance: '250m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };