"use client";

import { fadeUp } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectImageModal from "@/app/components/ProjectImageModal";
import { FiInfo } from "react-icons/fi";

const imagesSource = [
  {
    pages: {
      sources: [
        "/project-images/login-page.png",
        "/project-images/inventory.png",
        "/project-images/add-product.png",
        "/project-images/batches.png",
        "/project-images/profile.png",
        "/project-images/transaction.png",
      ],
    },
    manager: {
      sources: [
        "/project-images/manager/add-user.png",
        "/project-images/manager/user-management.png",
        "/project-images/manager/dashboard.png",
        "/project-images/manager/audit-log.png",
      ],
    },
    nurse: {
      sources: [
        "/project-images/nurse/dashboard.png",
        "/project-images/nurse/request-form.png",
      ],
    },
    pharmacist: {
      sources: [
        "/project-images/pharmacist/pos.png",
        "/project-images/pharmacist/printing-order.png",
      ],
    },
    cashier: {
      sources: [
        "/project-images/cashier/dashboard.png",
        "/project-images/cashier/payment.png",
      ],
    },
  },
];

const MacoleensPharmacy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ImageButton = ({ index, src }: { index: number; src: string }) => {
    return (
      <button
        className="cursor-pointer p-4 flex items-center justify-center rounded-md border"
        onClick={() => handleOpenModal(src)}
      >
        <Image
          src={src}
          alt={`Project image ${index + 1}`}
          width={400}
          height={350}
        />
      </button>
    );
  };
  const handleOpenModal = (src: string) => {
    setSelectedImage(src);
    setOpenModal(true);
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-8"
      >
        <header className="flex gap-4 items-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <BsArrowLeft className="text-xs" />
            Back to Home
          </Link>
          <h3 className="text-2xl font-semibold">
            Macoleen&#39;s Pharmacy Inventory and Management System
          </h3>
        </header>
      </motion.header>

      <main className="flex flex-col gap-y-8">
        {/* Pages */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">
            {imagesSource[0].pages.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
        {/* Manager */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Manager</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">
            {imagesSource[0].manager.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
        {/* Nurse */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Nurse</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">
            {imagesSource[0].nurse.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Pharmacist */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-b pb-12"
        >
          <h3 className="text-xl font-semibold mb-4">Pharmacist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">
            {imagesSource[0].pharmacist.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Cashier */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <h3 className="text-xl font-semibold mb-4">Cashier</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">
            {imagesSource[0].cashier.sources.map((src, index) => (
              <ImageButton key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="border dark:border-white rounded-lg p-4 mt-8 flex flex-col gap-4">
        <h3 className="text-lg font-semibold flex items-center gap-1">
          <FiInfo className="text-[18px] text-gray-500" />
          About This Project
        </h3>

        <p>
          Developed over one year with dedication and passion, this role-based
          pharmacy management system streamlines daily operations in a pharmacy
          setting. Built in close collaboration with the client, the system
          incorporates direct feedback and real-world requirements from pharmacy
          staff. Every feature was carefully crafted to ensure seamless
          coordination between staff members, with clearly defined
          responsibilities for each role:
        </p>

        <ul className="list-inside list-disc">
          <li>
            <strong>Manager:</strong> Responsible for creating and managing user
            accounts, monitoring sales and transactions, conducting audits, and
            overseeing inventory management to ensure accurate stock levels.
          </li>
          <li>
            <strong>Pharmacist:</strong> Handles inventory management, processes
            order requests, and prints receipts or product lists to provide to
            customers.
          </li>
          <li>
            <strong>Nurse:</strong> Submits order requests for medicines and
            supplies, ensuring timely fulfillment.
          </li>
          <li>
            <strong>Cashier:</strong> Processes payments after receiving the
            product list from the pharmacist.
          </li>
        </ul>

        <h5 className="text-lg font-semibold">Technologies Used</h5>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li className="flex items-center before:content-['•'] before:mr-2">
            TypeScript
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            NextJs
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            Tailwind
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            Shadcn
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            Prisma
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            MySql
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            Postman
          </li>
          <li className="flex items-center before:content-['•'] before:mr-2">
            Figma
          </li>
        </ul>

        <div className="space-y-1">
          <p>
            <span className="font-semibold">Live Demo:</span>{" "}
            <a
              href="https://macoleens-pharmacy.vercel.app/auth/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Application
            </a>
          </p>
          <p className="font-semibold">Accounts:</p>
          <p className="font-semibold">
            Manager:{" "}
            <span className="font-normal">
              jelmarrapis47@gmail.com pass:jelmar123
            </span>
          </p>
          <p className="font-semibold">
            Nurse:{" "}
            <span className="font-normal">
              jelmarrapis46@gmail.com pass:jelmar123
            </span>
          </p>
          <p className="font-semibold">
            Pharmacist:{" "}
            <span className="font-normal">
              jelmarrapis63@gmail.com pass:jelmar123
            </span>
          </p>
          <p className="font-semibold">
            Cashier:{" "}
            <span className="font-normal">
              shyzen8@gmail.com pass:jelmar123
            </span>
          </p>
        </div>
      </footer>

      {openModal && selectedImage && (
        <ProjectImageModal
          src={selectedImage}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default MacoleensPharmacy;
