const decodeToken = (jwtToken) => {
    // JWT token is in 3 parts separated by a dot.
    // Once we split them, we need the middle part
    // which is the payload.
    const decodedPayload = Buffer.from(
        jwtToken.split(".")[1],
        "base64"
    ).toString();
    return JSON.parse(decodedPayload);
};

module.exports = { decodeToken };
