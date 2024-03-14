class Film {
  constructor(title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
  }
}

class FilmPattern {
  constructor(films) {
    this.films = films;
  }

  handleAdd(e) {
    if (e.target.tagName === "BUTTON") {
      console.log("pp");
    }
  }

  liPatern() {
    const allList = this.films.map(film => {
      return `<li>Tytuł: ${film.title}, rok: ${film.year}, price: ${film.price} <button>dodaj</button></li>`;
    });

    return allList.join("");
  }
}

class FilmList {
  handleAdd(e) {
    if (e.target.tagName === "BUTTON") {
      console.log("pp");
    }
  }
  render() {
    const listItems = new FilmPattern([
      new Film("yo", 1988, 22),
      new Film("yoyyy", 19788, 228),
    ]);

    const list = document.createElement("ul");
    list.innerHTML = listItems.liPatern();
    list?.addEventListener("click", this.handleAdd.bind(this));
    return list;
  }
}

class Summary {
  render() {
    const div = document.createElement("div");
    div.innerHTML = `<h2>wynik<h2/>
        <button>wyczyść </button>`;

    this.output = div.querySelector("h2");
    console.log("", this.output);
    return div;
  }
}

class Shop {
  render() {
    const filmList = new FilmList();
    const summary = new Summary();
    document.body.append(summary.render());
    document.body.append(filmList.render());
  }
}

const shop = new Shop();

shop.render();
