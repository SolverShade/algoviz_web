import Image from "next/image";
import { Component } from "react";

export default class NavLink extends Component {
  public title: string;
  public href: string;
  public subLinks?: NavLink[];
  public hidden: boolean;

  constructor(props: any, title: string, href: string, subLinks?: NavLink[], hidden: boolean = false) {
    super(props);
    this.title = title;
    this.href = href;
    this.subLinks = subLinks;
    this.hidden = hidden;
  }

  handleClick() {
    if (this.subLinks) {
      this.subLinks.forEach(subLink => subLink.hidden = true);
    }
  }

  render(depth = 0) {
    const arrowIconPath = '/terminal_arrow_gray.svg';

    return (
      <div style={{ marginLeft: `${depth * 20}px` }}>
        {!this.hidden && (
          this.href !== '' ?
            <a
              key={this.title}
              href={this.href}
              onClick={() => this.handleClick()}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <Image src={arrowIconPath} alt="Arrow icon" width={12} height={12} />
              <p className="hidden md:block">{this.title}</p>
            </a>
            :
            <button
              key={this.title}
              onClick={() => this.handleClick()}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <Image src={arrowIconPath} alt="Arrow icon" width={12} height={12} />
              <p className="hidden md:block">{this.title}</p>
            </button>
        )}
        {this.subLinks && this.subLinks.length > 0 && (
          <div>
            {this.subLinks.map((subLink) => (
              subLink.render(depth + 1)
            ))}
          </div>
        )}
      </div>
    )
  }
}
