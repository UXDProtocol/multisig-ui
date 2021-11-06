import { Idl } from "@project-serum/anchor";

const uxdIdl: Idl = {
    "version": "0.0.0",
    "name": "uxd_ido",
    "instructions": [
      {
        "name": "initializePool",
        "accounts": [
          {
            "name": "poolAccount",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "poolSigner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "redeemableMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "uxpMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "usdcMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolUxp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolUsdc",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "distributionAuthority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "creatorUxp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "numIdoTokens",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "startIdoTs",
            "type": "i64"
          },
          {
            "name": "endDepositsTs",
            "type": "i64"
          },
          {
            "name": "endIdoTs",
            "type": "i64"
          }
        ]
      },
      {
        "name": "exchangeUsdcForRedeemable",
        "accounts": [
          {
            "name": "poolAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolSigner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "redeemableMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userRedeemable",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "exchangeRedeemableForUsdc",
        "accounts": [
          {
            "name": "poolAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolSigner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "redeemableMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userRedeemable",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "exchangeRedeemableForUxp",
        "accounts": [
          {
            "name": "poolAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolSigner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "redeemableMint",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "poolUxp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "userUxp",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userRedeemable",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "withdrawPoolUsdc",
        "accounts": [
          {
            "name": "poolAccount",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolSigner",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "poolUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "distributionAuthority",
            "isMut": false,
            "isSigner": true
          },
          {
            "name": "creatorUsdc",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "clock",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "PoolAccount",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "redeemableMint",
              "type": "publicKey"
            },
            {
              "name": "poolUxp",
              "type": "publicKey"
            },
            {
              "name": "uxpMint",
              "type": "publicKey"
            },
            {
              "name": "poolUsdc",
              "type": "publicKey"
            },
            {
              "name": "usdcMint",
              "type": "publicKey"
            },
            {
              "name": "distributionAuthority",
              "type": "publicKey"
            },
            {
              "name": "nonce",
              "type": "u8"
            },
            {
              "name": "numIdoTokens",
              "type": "u64"
            },
            {
              "name": "startIdoTs",
              "type": "i64"
            },
            {
              "name": "endDepositsTs",
              "type": "i64"
            },
            {
              "name": "endIdoTs",
              "type": "i64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 300,
        "name": "IdoFuture",
        "msg": "IDO must start in the future"
      },
      {
        "code": 301,
        "name": "SeqTimes",
        "msg": "IDO times are non-sequential"
      },
      {
        "code": 302,
        "name": "StartIdoTime",
        "msg": "IDO has not started"
      },
      {
        "code": 303,
        "name": "EndDepositsTime",
        "msg": "Deposits period has ended"
      },
      {
        "code": 304,
        "name": "EndIdoTime",
        "msg": "IDO has ended"
      },
      {
        "code": 305,
        "name": "IdoNotOver",
        "msg": "IDO has not finished yet"
      },
      {
        "code": 306,
        "name": "InvalidAmount",
        "msg": "Invalid amount passed to instruction. Should be not zero."
      },
      {
        "code": 307,
        "name": "LowUsdc",
        "msg": "Insufficient USDC"
      },
      {
        "code": 308,
        "name": "LowRedeemable",
        "msg": "Insufficient redeemable tokens"
      },
      {
        "code": 309,
        "name": "UsdcNotEqRedeem",
        "msg": "USDC total and redeemable total don't match"
      },
      {
        "code": 310,
        "name": "InvalidNonce",
        "msg": "Given nonce is invalid"
      },
      {
        "code": 311,
        "name": "InvalidParam",
        "msg": "Invalid param"
      },
      {
        "code": 312,
        "name": "InvalidIdoAmount",
        "msg": "Invalid Ido amount. There must be a positive amount of IDO token to distribute."
      },
      {
        "code": 313,
        "name": "InvalidIdoEndTime",
        "msg": "IDO cannot end before it starts."
      },
      {
        "code": 314,
        "name": "InvalidIdoDepositEndTime",
        "msg": "IDO cannot end before it starts."
      }
    ]
  };
export default uxdIdl;
