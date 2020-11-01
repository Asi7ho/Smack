//
//  RoundedBtn.swift
//  Smack
//
//  Created by Yann Debain on 13/01/2018.
//  Copyright © 2018 Debain Yann. All rights reserved.
//

import UIKit

@IBDesignable

class RoundedBtn: UIButton {

    @IBInspectable var cornerRadius: CGFloat = 5.0 {
        didSet {
            self.layer.cornerRadius = cornerRadius
        }
    }
    
    override func awakeFromNib() {
        self.setupView()
    }
    
    override func prepareForInterfaceBuilder() {
        super.prepareForInterfaceBuilder()
        self.setupView()
    }
    
    func setupView() {
        self.layer.cornerRadius = cornerRadius
    }
    
}
