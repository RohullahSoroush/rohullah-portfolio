import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    className,
    children,
  }) => {
    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        passHref
        className={clsx(
          "transition duration-150 ease-in-out text-white hover:text-gray-200",
          className
        )}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
