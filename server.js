const { app } = require("./server/app");
const { db } = require("./server/db/index");

const PORT = process.env.PORT;

const init = async () => {
    try {
        await db.sync();

        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

init();
