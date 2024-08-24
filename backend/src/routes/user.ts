import prisma from "../db";
import { Router } from "express";
import { JWT_SECRET } from "../config";

import nacl from "tweetnacl";
import {
  Connection,
  PublicKey,
  Transaction,
  clusterApiUrl,
} from "@solana/web3.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/signin", async (req, res) => {
  //   const { publicKey, signature } = req.body;
  // const publicKey = "9kKu8kyNP3NrhzmAcQpqVx8wsnFB2F7n1sva5BJWb7Vc";
  const publicKey = "0x14354";
  const signature = "";
  const message = new TextEncoder().encode("Sign into VoteChain");

  //   const result = nacl.sign.detached.verify(
  //     message,
  //     new Uint8Array(signature.data),
  //     new PublicKey(publicKey).toBytes()
  //   );

  //   if (!result) {
  //     return res.status(411).json({
  //       message: "Incorrect signature",
  //     });
  //   }

  const existingUser = await prisma.user.findFirst({
    where: {
      address: publicKey,
    },
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        userId: existingUser.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    const user = await prisma.user.create({
      data: {
        address: publicKey,
      },
    });

    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  }
});

export default router;
