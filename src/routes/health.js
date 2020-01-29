export default (api) => {
    api.get('/health', async (req, res) => {
        res.status(200).json({ code: 200, health: 'OK' });
    });
};
