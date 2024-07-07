<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UserAccessController extends AbstractController
{
    #[Route('/user', name: 'user_access')]
    public function index(CategoryRepository $categoryRepository): Response
    {
        $categories = $categoryRepository->findAll();
        return $this->render('user_access/index.html.twig', [
            'controller_name' => 'UserAccessController',
            'categories' => $categories,
        ]);
    }
}
