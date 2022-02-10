class Category {
  constructor(id, title, color) {
    this.id = id
    this.title = title
    this.color = color
  }
}

export const CATEGORIES = [
  new Category("c1", "Cat Products", "#2A1E5C"),
  new Category("d1", "Dog Products", "#EE4266"),
  new Category("f1", "Fish Products", "#FFC352"),
  new Category("t1", "Turtle Products", "#3CBBB1"),
]
