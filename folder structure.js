import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Project structure definition
const structure = {
  src: {
    config: ['db.ts', 'env.ts', 'index.ts'],
    controllers: [
      'authController.ts',
      'postController.ts',
      'commentController.ts',
      'categoryController.ts',
      'userController.ts'
    ],
    interfaces: [
      'IPost.ts',
      'IComment.ts',
      'IUser.ts',
      'index.ts'
    ],
    middleware: [
      'authMiddleware.ts',
      'errorMiddleware.ts',
      'loggerMiddleware.ts',
      'validationMiddleware.ts'
    ],
    models: [
      'User.ts',
      'Post.ts',
      'Comment.ts',
      'Category.ts',
      'Tag.ts',
      'index.ts'
    ],
    routes: [
      'authRoutes.ts',
      'postRoutes.ts',
      'commentRoutes.ts',
      'categoryRoutes.ts',
      'userRoutes.ts',
      'index.ts'
    ],
    services: [
      'authService.ts',
      'postService.ts',
      'commentService.ts',
      'categoryService.ts',
      'userService.ts'
    ],
    utils: [
      'constants.ts',
      'emailSender.ts',
      'passwordHasher.ts',
      'responseFormatter.ts'
    ],
    types: ['express.d.ts', 'errorTypes.ts'],
    app: 'app.ts',
    server: 'server.ts'
  },
  tests: {
    integration: [],
    unit: [],
    'setup.ts': ''
  },
  // '.env': '',
  // '.gitignore': '',
  // 'package.json': '',
  'tsconfig.json': '',
  // 'README.md': ''
};

// Function to create directories and files
const createStructure = (base, structure) => {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = join(base, key);

    if (typeof value === 'object' && !Array.isArray(value)) {
      // Create directory and recurse
      mkdirSync(fullPath, { recursive: true });
      createStructure(fullPath, value);
    } else if (Array.isArray(value)) {
      // Create directory and files within
      mkdirSync(fullPath, { recursive: true });
      value.forEach(file => writeFileSync(join(fullPath, file), ''));
    } else {
      // Create file
      writeFileSync(fullPath, '');
    }
  });
};

// Create the structure in the current directory
createStructure('.', structure);

console.log('Folder structure created successfully!');
