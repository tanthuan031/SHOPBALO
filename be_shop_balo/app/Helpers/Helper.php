<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class Helper
{
    /**
     * isCheckFileImage
     *
     * @param  mixed $files
     * @return array
     */
    public static function isCheckFileImage($files, $folder)
    {
        $fileExtension = ['png', 'jpg', 'jpeg', 'gif'];

        if (!is_null($files)) {
            $ext = $files->getClientOriginalExtension();
            if (!in_array($ext, $fileExtension)) {
                return false;
            }
            $size = $files->getSize();
            if ($size > 5000000) {
                return false;
            }
            $nameFile =  static::saveImage($files->getClientOriginalName(), $folder, $files);

            return $nameFile;
        } else {

            return null;
        }
    }


    /**
     * base64Image
     *
     * @param  mixed $param
     * @param  mixed $folder
     * @return filename
     */
    public static function saveImage($fileName, $folder, $files)
    {
        $storage = Storage::disk('public');

        $checkDirectory = $storage->exists($folder);

        if (!$checkDirectory) {
            $storage->makeDirectory($folder);
        }

        $storage->putFileAs($folder, $files, $fileName);

        return $fileName;
    }


    /**
     * saveImgBase64
     *
     * @param  mixed $param
     * @param  mixed $folder
     * @return filename
     */
    public static function saveImgBase64($param, $folder)
    {

        list($extension, $content) = explode(';', $param);
        $tmpExtension = explode('/', $extension);
        preg_match('/.([0-9]+) /', microtime(), $m);
        $fileName = sprintf('img%s%s.%s', date('YmdHis'), $m[1], $tmpExtension[1]);
        $content = explode(',', $content)[1];
        $storage = Storage::disk('public');

        $checkDirectory = $storage->exists($folder);

        if (!$checkDirectory) {
            $storage->makeDirectory($folder);
        }
        $storage->put($folder . '/' . $fileName, base64_decode($content), 'public');
        return $fileName;
    }
}
