const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const setAuthCookie = (res, token) => {
    console.log("Setting cookie with token:", token);
    res.cookie('auth', token, {
        httpOnly: true,
        secure: false,
        maxAge: ONE_DAY_MS
    })
};

module.exports = {setAuthCookie};