import Link from "next/link";

type NotFoundSectionProps = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="not-found__button-icon" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

export function NotFoundSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: NotFoundSectionProps) {
  return (
    <section className="not-found">
      <div aria-hidden="true" className="not-found__glow not-found__glow--left" />
      <div aria-hidden="true" className="not-found__glow not-found__glow--right" />

      <div className="not-found__inner">
        <p className="not-found__eyebrow">404</p>
        <h1 className="not-found__title">{title}</h1>
        <p className="not-found__description">{description}</p>

        <div className="not-found__actions">
          <Link className="not-found__button" href="/">
            <span>{primaryButtonText}</span>
            <ArrowIcon />
          </Link>

          <Link className="not-found__ghost-button" href="/news">
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
