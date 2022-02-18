const cities = [
    'Karachi',
    'Lahore',
    'Faisalabad',
    'Rawalpindi',
    'Gujranwala',
    'Peshawar',
    'Multan',
    'Hyderabad',
    'Islamabad',
    'Quetta',
    'Bahawalpur',
    'Sargodha',
    'Sialkot',
    'Mardan',
    'Mingaora',
    'Nawabshah',
    'Sahiwal',
    'Jacobabad',
    'Saddiqabad',
    'Kohat',
    'Abbottabad'
]

function randomCity() {
    const random = cities[Math.floor(Math.random() * cities.length)]
    return random.toLowerCase();
}

export { randomCity };