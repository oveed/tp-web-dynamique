<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void{
        Schema::create('publications', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('description');
            $table->string('image_path', 300);
            $table->string('categorie')->default('cinema');
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('publications');
    }
};
