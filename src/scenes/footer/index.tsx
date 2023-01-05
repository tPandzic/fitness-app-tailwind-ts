import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            quis iure possimus, fuga, accusamus excepturi autem fugiat explicabo
            consequatur in saepe natus error inventore distinctio eveniet ea
            incidunt velit eligendi!
          </p>
          <p>©️ Evogym All Right Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum tempest ricus.</p>
          <p>(+333) 425 - 1678</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
