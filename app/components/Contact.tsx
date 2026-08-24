import { Mail } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "jelmarrapis@gmail.com",
    href: "mailto:jelmarrapis@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/jelmar-rapis",
    href: "https://www.linkedin.com/in/jelmar-rapis",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="contact">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Have a project in mind or just want to connect? Reach out through email
        or LinkedIn — I&apos;m always open to new opportunities and
        conversations.
      </p>

      <div className="flex flex-col gap-4">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                item.label === "LinkedIn" ? "noreferrer noopener" : undefined
              }
              className="group flex items-center gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-4 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800">
                <Icon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="truncate text-sm text-muted-foreground">
                  {item.value}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
