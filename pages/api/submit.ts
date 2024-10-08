// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from 'next';

let submissions: Array<{ name: string; email: string; message: string; submittedAt: Date }> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Validate the input
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Store the submission in memory
        submissions.push({ name, email, message, submittedAt: new Date() });

        return res.status(200).json({ message: 'Form submitted successfully!', submissions });
    } else {
        return res.setHeader('Allow', ['POST']).status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
