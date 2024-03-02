/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Notarization, NotarizationInterface } from "../Notarization";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
    ],
    name: "getHashEvidence",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b03191633179055610367806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af403514610051578063592279fb146100665780638da5cb5b1461008f578063f2c298be146100a4575b600080fd5b61006461005f366004610190565b6100b7565b005b6100796100743660046101be565b61010c565b6040516100869190610312565b60405180910390f35b610097610133565b60405161008691906102a1565b6100646100b23660046101be565b610142565b6001546001600160a01b031633146100ea5760405162461bcd60e51b81526004016100e1906102b5565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000808260405161011d9190610268565b9081526020016040518091039020549050919050565b6001546001600160a01b031681565b6001546001600160a01b0316331461016c5760405162461bcd60e51b81526004016100e1906102b5565b4260008260405161017d9190610268565b9081526040519081900360200190205550565b6000602082840312156101a1578081fd5b81356001600160a01b03811681146101b7578182fd5b9392505050565b6000602082840312156101cf578081fd5b813567ffffffffffffffff808211156101e6578283fd5b818401915084601f8301126101f9578283fd5b81358181111561020b5761020b61031b565b604051601f8201601f19908116603f011681019083821181831017156102335761023361031b565b8160405282815287602084870101111561024b578586fd5b826020860160208301379182016020019490945295945050505050565b60008251815b81811015610288576020818601810151858301520161026e565b818111156102965782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b60208082526039908201527f4f6e6c7920746865206f776e65722063616e2072656769737465722c206f722060408201527f6368616e6765207468652063757272656e74206f776e65722e00000000000000606082015260800190565b90815260200190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220232a29f9ef05b23b600c587b94f824dd2ca608fc124cf457bd98772f6f1e9bce64736f6c63430008010033";

export class Notarization__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Notarization> {
    return super.deploy(overrides || {}) as Promise<Notarization>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Notarization {
    return super.attach(address) as Notarization;
  }
  connect(signer: Signer): Notarization__factory {
    return super.connect(signer) as Notarization__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NotarizationInterface {
    return new utils.Interface(_abi) as NotarizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Notarization {
    return new Contract(address, _abi, signerOrProvider) as Notarization;
  }
}
