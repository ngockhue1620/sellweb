<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $table = 'files';
	protected $fillable = ['name', 'original_filename', 'content_type', 'size', 'customer_id', 'access_mode'];
	protected $primaryKey = 'name';
	protected $hidden  = [ 'created_at', 'updated_at', 'data'];
	//Make it available in the json response
	protected $appends = ['url', 'relative_url'];

	//implement the attribute
	public function getUrlAttribute()
	{
		return \URL::to('/').'/api/download/files/'.$this->name;
	}
	public function setUrlAttribute(){
		return ;
	}

	public function getRelativeUrlAttribute()
	{
		return 'api/download/files/'.$this->name;
	}
	public function setRelativeUrlAttribute(){
		return ;
	}

   	public $incrementing = false; 

	public function owner()
    {
    	return $this->hasOne('App\Models\Customer', 'id', 'customer_id');
	}
}
