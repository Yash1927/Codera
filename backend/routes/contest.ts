import { Router } from "express"; 

const router = Router();

router.get("/active", (req, res) => {
    const {offset, page} = req.query;
})

router.get("/finished", (req, res) => {
    let {offset, page} = req.query
})

router.get("/:contestId", (req, res) => {
    const contestId = req.params.contestId;
})

router.get("/:contestId/:challengeId", (req, res) => {
    const contestId = req.params.contestId;
})

router.get("/leaderboard/:contestId", (req, res) => {
    const contestId = req.params.contestId;
})

router.post("/submit/:challengeId", (req, res) => {
    
})

export default router