import AnchorLink from "react-anchor-link-smooth-scroll";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, link, details }) => {
  const overlayStyles = `absolute shadow-xl rounded-xl h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair text-gray-900">{title}</p>
          <p className="mt-7 text-gray-700">{details}</p>
          <button
            className="bg-red text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 mt-10"
          >
            Visit Application
          </button>
        </div>
        <img
          src={`../assets/${image}.png`}
          alt={image}
          className="shadow-2xl rounded-xl "
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 grid-cols flex gap-10 flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="Stashed Account Abstracted Wallet"
            image="stashed"
            link="https://dev-wallet.joinstashed.com/"
            details="Stashed is a wallet that uses Account Abstraction for user experience where user do not have to handle with private key or seedphrase and users do not have to deal with gas fees as they can perform transactions using their non native tokens."
          />
          <Project
            title="Bullion FX"
            image="bullionFX"
            link="https://bullionfx.com/"
            details="A decentralised financial ecosystem built on auditable physical gold"
          />

          {/* ROW 1 */}

          <Project
            title="Aramid Near Bridge"
            image="aramid"
            link="https://main.k8s.aramid.finance/"
            details="Aramid Bridge is one of the first bridge to support Near to EVM and to Algorand chain bridge of funds. It supports multiple wallets with multiple chains to connect to blockchain."
          />
          <Project
            title="Kolnet Presale Marketplace"
            image="kolnet"
            link="https://testnet.kolnet.io/"
            details="Kolnet is a token presale market by using marketing in its process to make sure only authentic tokens get more recognitions and funds from users."
          />

          {/* ROW 2 */}
          <Project
            title="Events Dapp"
            image="eventsdapp"
            link="https://eventsdapp-45b48.web.app/"
            details="Events Dapp is event management dapp by Phoenix DAO which provides event ticketing functionality as NFTs which allows users to buy and sell their tickets to make use in real life events."
          />
          <Project
            title="MContent Bridge"
            image="mcontent"
            link="https://bridge.mcontent.net/"
            details="MContent Bridge to bridge mcontent reflect tokens from Ethereum to Binance network."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
