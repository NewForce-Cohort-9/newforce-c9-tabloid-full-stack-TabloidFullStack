﻿using TabloidFullStack.Models;

namespace TabloidFullStack.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        Category GetById(int id);
        void Add(Category category);
<<<<<<< HEAD
        void Update(Category category);
=======
        void Delete(int id);
>>>>>>> main
    }
}