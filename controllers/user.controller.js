

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Here you would typically hash the password and save the user to a database
        console.log(`User signed up: ${username}`);
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    }
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Here you would typically check the username and password against a database
        console.log(`User logged in: ${username}`);
        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getDogs = (req, res) => {
    const dogs = [
        { id: 1, name: 'Buddy', breed: 'Golden Retriever' },
        { id: 2, name: 'Max', breed: 'German Shepherd' },
        { id: 3, name: 'Bella', breed: 'Labrador Retriever' }
    ];
    res.status(200).json({ dogs });
};

