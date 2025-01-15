import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Documentation = () => {
  const router = useRouter();
  const { section, subsection } = router.query;

  const isActive = (targetSection, targetSubsection = null) => {
    return (
      section === targetSection &&
      (targetSubsection === null || subsection === targetSubsection)
    );
  };

  // Variants for the animation
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <h3
        className={`text-lg font-semibold text-black4-custom dark:text-gray-custom mb-3 hover:text-black2-custom dark:hover:text-white-custom ${
          isActive("get-started") && "text-black2-custom dark:text-white-custom"
        }`}
      >
        <Link href="/documentation?section=get-started" passHref>
          Get Started
        </Link>
      </h3>
      <ul className="text-black4-custom dark:text-gray-custom list-none pl-4 border-l-2 border-black4-custom dark:border-gray-custom space-y-0 mb-4">
        <li
          className={`hover:bg-gray-100 dark:hover:bg-black2-custom p-2 rounded ${
            isActive("get-started", "whats-new") && "bg-gray-100 dark:bg-black2-custom"
          }`}
        >
          <Link href="/documentation?section=get-started&subsection=whats-new" passHref>
            What’s New
          </Link>
        </li>
      </ul>
      <h3
        className={`text-lg text-black4-custom font-semibold dark:text-gray-custom mt-8 mb-3 hover:text-black2-custom dark:hover:text-white-custom ${
          isActive("user-docs") && "text-black2-custom dark:text-white-custom"
        }`}
      >
        <Link href="/documentation?section=user-docs" passHref>
          User Docs
        </Link>
      </h3>
      <ul className="text-black4-custom dark:text-gray-custom list-none pl-5 border-l-2 border-black4-custom dark:border-gray-custom space-y-0 mb-4">
        {[
          { name: "Sales", link: "sales" },
          { name: "Finance", link: "finance" },
          { name: "Website", link: "website" },
          { name: "Marketing", link: "marketing" },
          { name: "Services", link: "services" },
        ].map((item) => (
          <li
            key={item.name}
            className={`hover:bg-gray-100 dark:hover:bg-black2-custom p-2 rounded ${
              isActive("user-docs", item.link) && "bg-gray-100 dark:bg-black2-custom"
            }`}
          >
            <Link href={`/documentation?section=user-docs&subsection=${item.link}`} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3
        className={`text-lg text-black4-custom font-semibold dark:text-gray-custom mt-8 mb-3 hover:text-black2-custom dark:hover:text-white-custom ${
          isActive("database") && "text-black2-custom dark:text-white-custom"
        }`}
      >
        <Link href="/documentation?section=database" passHref>
          Database
        </Link>
      </h3>
      <ul className="text-black4-custom dark:text-gray-custom list-none pl-5 border-l-2 border-black4-custom dark:border-gray-custom space-y-0 mb-4">
        {[
          { name: "Hosting", link: "hosting" },
          { name: "Upgrade", link: "upgrade" },
          { name: "Version", link: "version" },
        ].map((item) => (
          <li
            key={item.name}
            className={`hover:bg-gray-100 dark:hover:bg-black2-custom p-2 rounded ${
              isActive("database", item.link) && "bg-gray-100 dark:bg-black2-custom"
            }`}
          >
            <Link href={`/documentation?section=database&subsection=${item.link}`} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3
        className={`text-lg text-black4-custom font-semibold dark:text-gray-custom mt-8 mb-3 hover:text-black2-custom dark:hover:text-white-custom ${
          isActive("developer") && "text-black2-custom dark:text-white-custom"
        }`}
      >
        <Link href="/documentation?section=developer" passHref>
          Developer
        </Link>
      </h3>
      <ul className="text-black4-custom dark:text-gray-custom list-none pl-5 border-l-2 border-black4-custom dark:border-gray-custom space-y-0 mb-4">
        {[
          { name: "Tutorials", link: "tutorials" },
          { name: "How To Guides", link: "how-to-guides" },
        ].map((item) => (
          <li
            key={item.name}
            className={`hover:bg-gray-100 dark:hover:bg-black2-custom p-2 rounded ${
              isActive("developer", item.link) && "bg-gray-100 dark:bg-black2-custom"
            }`}
          >
            <Link href={`/documentation?section=developer&subsection=${item.link}`} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3
        className={`text-lg text-black4-custom font-semibold dark:text-gray-custom mt-8 mb-3 hover:text-black2-custom dark:hover:text-white-custom ${
          isActive("help") && "text-black2-custom dark:text-white-custom"
        }`}
      >
        <Link href="/documentation?section=help" passHref>
          Help
        </Link>
      </h3>
      <ul className="text-black4-custom dark:text-gray-custom list-none pl-5 border-l-2 border-black4-custom dark:border-gray-custom space-y-0">
        {[
          { name: "FAQ", link: "faq" },
          { name: "Support", link: "support" },
        ].map((item) => (
          <li
            key={item.name}
            className={`hover:bg-gray-100 dark:hover:bg-black2-custom p-2 rounded ${
              isActive("help", item.link) && "bg-gray-100 dark:bg-black2-custom"
            }`}
          >
            <Link href={`/documentation?section=help&subsection=${item.link}`} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Documentation;
