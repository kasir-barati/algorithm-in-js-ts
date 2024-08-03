// #region: Product
class MenuItem {
  constructor(
    public title: string,
    public url: string,
    public children: MenuItem[] = [],
  ) {}

  public addChild(item: MenuItem): void {
    this.children.push(item);
  }
  public print(indent: string = ''): void {
    console.log(`${indent}${this.title} (${this.url})`);
    for (const child of this.children) {
      child.print(indent + '  ');
    }
  }
}

class Menu {
  constructor(public rootItems: MenuItem[] = []) {}

  public addRootItem(item: MenuItem): void {
    this.rootItems.push(item);
  }
  public print(): void {
    for (const item of this.rootItems) {
      item.print();
    }
  }
}
// #endregion

// #region: Builder
interface MenuBuilder {
  addMenuItem(title: string, url: string, parentTitle?: string): void;
  build(): Menu;
}
class MainMenuBuilder implements MenuBuilder {
  private menu: Menu;
  private itemsMap: Map<string, MenuItem>;

  constructor() {
    this.menu = new Menu();
    this.itemsMap = new Map<string, MenuItem>();
  }

  public addMenuItem(
    title: string,
    url: string,
    parentTitle?: string,
  ): void {
    const menuItem = new MenuItem(title, url);
    this.itemsMap.set(title, menuItem);

    if (!parentTitle) {
      this.menu.addRootItem(menuItem);
      return;
    }

    const parentItem = this.itemsMap.get(parentTitle);
    if (parentItem) {
      parentItem.addChild(menuItem);
    }
  }

  public build(): Menu {
    return this.menu;
  }
}
// #endregion

// #region: Director
class MenuDirector {
  constructor(private builder: MenuBuilder) {}

  public constructMainMenu(): void {
    this.builder.addMenuItem('Home', '/home');
    this.builder.addMenuItem('Products', '/products');
    this.builder.addMenuItem(
      'Laptops',
      '/products/laptops',
      'Products',
    );
    this.builder.addMenuItem(
      'Smartphones',
      '/products/smartphones',
      'Products',
    );
    this.builder.addMenuItem('About Us', '/about');
    this.builder.addMenuItem('Contact', '/contact');
  }

  public getMenu(): Menu {
    return this.builder.build();
  }
}
// #endregion

/**
 * You can simply create more builders and methods inside the MenuDirector to cover different types of menus.
 */

// #region: Use
const builder = new MainMenuBuilder();
const menuDirector = new MenuDirector(builder);
menuDirector.constructMainMenu();
const menu = menuDirector.getMenu();
console.log('Menu structure:');
menu.print();
// #endregion
